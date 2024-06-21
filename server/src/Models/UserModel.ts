import mongoose, { models } from "mongoose";

const user = new mongoose.Schema({
    username:   {type:String, required:true, unique:true},
    email:      {type:String, required:true, unique:true},
    fullName:   {type:String},
    location:   {type:String},
    purpose:   {type:String},
    billing:   {type:Boolean},
    gender:   {type:String},
    bio:   {type:String},
})

const User = mongoose.model('UserData', user) || models.user
export default User