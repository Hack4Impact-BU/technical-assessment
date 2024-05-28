const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const uri = 'mongodb+srv://ethun2004:kVm2j64qMDEBgvZA@hack4impact.p77nqsd.mongodb.net/?retryWrites=true&w=majority&appName=hack4impact';
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');

        const database = client.db('news_directory');
        const emailsCollection = database.collection('emails');

        // API endpoint to handle email submissions
        app.post('/api/emails', async (req, res) => {
            const { email } = req.body;

            try {
                const result = await emailsCollection.insertOne({ 
                    email, 
                    dateJoined: new Date()
                });
                res.status(201).json({ message: 'Email saved', result });
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: 'Server error' });
            }
        });

        // New API endpoint to get all emails
        app.get('/api/emails', async (req, res) => {
            try {
                const emails = await emailsCollection.find().toArray();
                res.status(200).json(emails);
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: 'Server error' });
            }
        });

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (err) {
        console.error(err);
    }
}

main().catch(console.error);
