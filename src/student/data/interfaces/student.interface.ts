import { Document } from "mongoose";


export interface StudentInterface extends Document {
    name: String,
    fees: number,
    redate: String,
    area: String
}