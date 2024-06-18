import { Router } from "express";
import Document from "../Models/DocumentModel";
const router = Router()

router.get('/', (req, res) => {
    res.send('welcome to docs')
})

// create doc
router.post('/:id', async(req, res) => {
    const userId = req.params.id
    const {name,type,serialNumber,connections,billing,status,sharing} = req.body


    try {
        const doc = new Document({ userId, name, type, serialNumber, connections, billing, status, sharing });
        await doc.save();
        res.status(201).json(doc);
        
    } catch (error) {
        res.status(500).json(error)
    }
})

// get user docs
router.get('/:id', async(req, res) => {
    const userId = req.params.id
    const {name,type,serialNumber,connections,billing,status,sharing} = req.body


    try {
        const doc = new Document({ userId, name, type, serialNumber, connections, billing, status, sharing });
        await doc.save();
        res.status(201).json(doc);
        
    } catch (error) {
        res.status(500).json(error)
    }
})

// update user docs
router.put('/:id', async(req, res) => {
    try {
            const doc = await Document.findByIdAndUpdate(req.params.id)

                if(doc?.userId === req.body.userId){
                    await doc?.updateOne({$set:(req.body)})
                    res.status(200).json('post updated')
                }
                else(
                    res.status(404).json('can only update user  documents')
                )
        
    } catch (error) {
        res.status(500).json(error)
    }
})


export default router
