import mongoose, { mongo } from "mongoose";


const emailSchema = new mongoose.Schema(
    {
        name:{
            type:String
        }, 
        email: {
            type:String
        }
    }
)


export const Email = mongoose.model('Email', emailSchema)