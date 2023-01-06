import { Document } from "mongoose";
import * as mongoose from 'mongoose'

export interface Installment extends Document {
    amount: Number,
    date: Date,
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentInterface' }

}