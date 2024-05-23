import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;
const API_URL = process.env.API_URL;

//API
app.get('/news', async (req, res) => {
    try{
        const response = await fetch(API_URL,{
         method: 'GET'
    });
    if(!response.ok){
        throw new Error('Cant fetch news from API');
    }
    const data = await response.json();
    res.json(data);
    }catch(error){
        console.error(error)
        res.status(500).json({message: 'error'})
    }
});
//MONGODB
const mongourl = process.env.MONGO_URL
const mongoclient = new MongoClient(mongourl, {});

mongoclient.connect().then(() => {
    console.log('Connected to MongoDB')
})

app.get('/users', async (req, res) => {
    try{
        const users = await mongoclient.db('Echoing-Times').collection('users').find({}).sort({dateJoined: -1}).toArray();
        
        res.status(200).json(users)
    }catch(error){
        console.error(error)
        res.status(500).json({message: 'error'})
    }
});

app.post('/add-user', async (req, res) =>{
    try{
        const user = req.body

        if (!user.name || !user.email || !user.dateJoined ||
            Object.keys(user).length !== 3) {
            res.status(400).send('Invalid Sign Up');
            return;
        }
    
        const result = await mongoclient.db('Echoing-Times').collection('users').insertOne(user);
        const userAdded = await mongoclient.db('Echoing-Times').collection('users').findOne({ _id: result.insertedId });
        //201 => creation
        res.status(201).json(userAdded)
    }catch (error){
        console.error(error)
        res.status(500).json({ message: 'error'})
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})