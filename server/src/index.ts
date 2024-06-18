import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import UserRoute from './Routes/UserRoute'
import DocumentRoute from './Routes/DocumentRoute'

dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000

const mongoUrl = process?.env?.MONGO_URL
if (!mongoUrl) {
    throw new Error("MONGO_URL environment variable is not defined");
}

// connect to mongoose
mongoose.connect(mongoUrl)
mongoose.connection.on('connected',()=>{console.log('mongoDB connection established');})
mongoose.connection.on('error',()=>{console.log('connection error');})

// middleware
app.use(cors())
app.use(express.json())


// Routes
app.get('/', (req, res) => { res.send('Welcome hello worldss')})
app.use('/api/user', UserRoute)
app.use('/api/docs', DocumentRoute)


app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})