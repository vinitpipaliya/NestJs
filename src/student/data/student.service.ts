import { Injectable } from '@nestjs/common';
import { StudentDTO } from './dto/student.dto';
// import{v4 as uuidv4} from "uuid"
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentInterface } from './interfaces/student.interface';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel('Student')
        private receipeModel: Model<StudentInterface>,
    ) { }

    async addStudent(student: StudentDTO): Promise<any> {
        const newReceipe = await new this.receipeModel(student);
        newReceipe.save((err, data) => {
            if (err) {
                return ({
                    err: "Not able to save in database. " + err
                })
            }
            else {
                return ({
                    message: "Successfully Saved!!!"
                })
            }
        });
    }

    async updateStudent(student: StudentDTO): Promise<any> {
        await this.receipeModel.findByIdAndUpdate(student._id , student, (err, data) => {
            if (err) {
                return ({
                    err: "Not able to update in database. " + err
                })
            }
            else {
                return ({
                    message: "Successfully updated!!!"
                })
            }
        })
    }

    async deleteStudent(student: StudentDTO): Promise<any> {
        await this.receipeModel.findByIdAndRemove({ _id: student._id }, (err, data) => {
            if (err) {
                return ({
                    err: "Not able to remove from database. " + err
                })
            }
            else {
                return ({
                    message: "Successfully Removed."
                })
            }
        })
    }

    async getStudent(): Promise<StudentInterface[]> {
        const receipe = await this.receipeModel.find({}, (err, data) => {
            if (err) {
                return ({
                    err: "Not able to fetch data from database. " + err
                })
            }
            else {
                return ({
                    Data: data
                })
            }
        });
        return receipe;
    }
}
