import { Router } from "express";
import User from "../Models/UserModel";
const router = Router()


router.get('/', async(req, res) => {
    res.send('welcome User')
})

// create a new user
router.post('/create', async(req, res) => {
    const {username , fullName, email, location, purpose, billing, gender, bio} = req.body
    try {
        const user = await User.create({username, fullName, email, location, purpose, billing, gender, bio})
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get a user
router.get('/:email', async(req, res) => {
    
    try {
        const user = await User.findOne({email: req.params.email})
        if(!user){
            res.status(404).json('user not found')
        }else{
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router
