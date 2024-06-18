import mongoose, { models } from "mongoose";

const document = new mongoose.Schema({
    name:           {type: String, required: true},
    userId:         {type: String, required: true},
    type:           {type: String, required: true},
    serialNumber:   {type: String, required: true},
    status:         {type: String, required: true},
    connections:    {type: Boolean, default: false},
    billing:        {type: Boolean, default: false},
    sharing:        {type: Boolean, default: false},
})

const Document = mongoose.model('Documents', document) || models.document
export default Document