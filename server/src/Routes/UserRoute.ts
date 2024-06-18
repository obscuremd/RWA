import { Router } from "express";
import User from "../Models/UserModel";
const router = Router()


router.get('/', async(req, res) => {
    res.send('welcome User')
})

// create a new user
router.post('/create', async(req, res) => {
    const {username , fullName, email, location} = req.body
    try {
        const user = await User.create({username, fullName, email, location})
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router
