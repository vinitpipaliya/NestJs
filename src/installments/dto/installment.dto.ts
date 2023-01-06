import { ObjectId } from "mongoose"

export class InstallmentDto {
    amount: number;
    student_id: ObjectId;
    date: Date;
}
