import * as mongoose from "mongoose";
export const InstallmentSchema = new mongoose.Schema({
    amount: Number,
    date: Date,
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentInterface' }
})