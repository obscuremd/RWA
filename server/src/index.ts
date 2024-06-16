import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express();

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome hello worldss')
})

app.get('/hi', (req, res) => {
    res.send('arigato gozilla matsu des ka sta des uu ni san')
})

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})