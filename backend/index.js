import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

const mongourl = process.env.MONGO_URL
const mongoclient = new MongoClient(mongourl, {})

mongoclient.connect().then(() => {
    console.log('Connected to MongoDB')
})

app.get('/', (req, res) => {
    res.send('/')
})

// proxy for Chronicling America API
app.get('/newspapers', (req, res) => {
    axios.get('https://chroniclingamerica.loc.gov/newspapers.json')
        .then(function (body) {
            res.status(200).json(body.data);
        })
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

app.get('/community', async (req, res) => {
    try {
        const users = await mongoclient.db('our-republic').collection('community').find({}).toArray()
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'error' })
    }
})

app.post('/add-user', async (req, res) => {
    try {
        const user = req.body
        if (!user.first || !user.last || !user.email || Object.keys(user).length !== 3) {
            res.status(400).json({ message: 'bad request' })
            return
        }
        await mongoclient.db('our-republic').collection('community').insertOne(user)
        res.status(201).json({ message: 'success' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'error' })
    }
})