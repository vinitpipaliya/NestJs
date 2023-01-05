import mongoose from "mongoose";


export const StudentSchema = new mongoose.Schema({
    name: String,
    fees: Number,
    redate: String,
    area: String
})