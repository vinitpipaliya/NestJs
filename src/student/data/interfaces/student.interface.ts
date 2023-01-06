import { Document } from "mongoose";


export interface StudentInterface extends Document {
    _id: String,
    name: String,
    fees: number,
    redate: String,
    area: String
}