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
    res.send('Welcome')
})

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})