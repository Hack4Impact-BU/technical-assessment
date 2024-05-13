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