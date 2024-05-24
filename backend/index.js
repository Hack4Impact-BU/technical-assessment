import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json());

const PORT = process.env.PORT || 5174

const mongourl = process.env.MONGO_URL
const mongoclient = new MongoClient(mongourl, {});

mongoclient.connect().then(() => {
    console.log('Connected to MongoDB')
})

//gets all the email and name from database into array
app.get('/user', async (req, res) => {
    try {
        const users = await mongoclient.db('directory-email').collection('email').find({}).toArray()
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'error' })
    }
})

// --------------------------------------------------------------------------------
//endpoint to add user to the database

app.post('/add-user', async(req, res) => {
    try {
        const user = req.body

        if (!user.name || !user.email || !user.dateJoined || Object.keys(user).length !== 3) {
            res.status(400).json({ message: 'bad request' })
            return
        }

        await mongoclient.db('directory-email').collection('email').insertOne(user)
        res.status(201).json({ message: 'success'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error lol' })
    }
})

// ------------------------------------------------------------------------

app.get('/news', async(req, res) => {
    const apiURL = 'https://chroniclingamerica.loc.gov/newspapers.json';
    const response = await fetch(apiURL);
    const data = await response.json();
    res.send(data);
})

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

