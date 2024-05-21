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
    console.log("hello")
    fetch('http://localhost:5174/news').then(res => res.json()).then(val => console.log(val.newspapers[0].state))
})

