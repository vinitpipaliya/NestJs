import { Injectable, Res } from '@nestjs/common';
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

    async addStudent(student: StudentDTO, req, res): Promise<any> {
        const newReceipe = await new this.receipeModel(student);
        newReceipe.save(
            (err, data) => {
                if (err) {
                    return res.json({
                        err: "Not able to save in database. " + err
                    })
                }
                else {
                    return res.json({
                        message: "Successfully Saved!!!"
                    })
                }
            }
        );
    }

    async updateStudent(student: StudentDTO, req, res): Promise<any> {
        const data = req.body;
        await this.receipeModel.findOneAndUpdate({ _id: data._id }, data).exec((err, data) => {
            if (err) {
                return res.json({
                    err: "Not able to update in database. " + err
                })
            }
            else {
                return res.json({
                    message: "Successfully updated!!!"
                })
            }
        })

    }

    async deleteStudent(student: StudentDTO, req, res): Promise<any> {
        const data = req.body
        const receipe = await this.receipeModel.findByIdAndRemove({ _id: data._id }).exec((err, data) => {
            if (err) {
                return res.json({
                    err: "Not able to remove from database. " + err
                })
            }
            else {
                return res.json({
                    message: "Successfully Removed."
                })
            }
        })
        return receipe
    }

    async getStudent(req, res): Promise<any> {
        await this.receipeModel.find().exec((err, data) => {
            if (err) {
                return res.json({
                    err: "Not able to find in database. " + err
                })
            }
            else {
                return res.send({
                    DATA: data
                })
            }
        })

    }

    async allStudentWithInstallment(student: StudentDTO, req, res): Promise<any> {
        await this.receipeModel.aggregate([
            {
                $lookup: {
                    from: 'installments',
                    localField: "_id",
                    foreignField: "student_id",
                    as: "Installments",
                    pipeline: [{ $project: { amount: 1, date: 1, } }]
                }
            },
            {
                $project: {
                    name: 1,
                    fees: 1,
                    area: 1,
                    Installments: 1
                }
            }
        ]).exec((err, data) => {
            if (err) {
                return res.json({
                    err: "Not able to Populate in databse. " + err
                })
            }
            else {
                return res.send({
                    DATA: data
                })
            }
        })
    }

    async findBySearch(student: StudentDTO, req, res): Promise<any> {
        const colName = req.body;
        await this.receipeModel.find(
            {
                "$or": [
                    { "name": { "$regex": `${colName.name}`, "$options": "i" } },
                    { "area": { "$regex": `${colName.area}`, "$options": "i" } }
                ]
            }
            // {
            //     "$text": {
            //         "$search": colName
            //     }
            // }
        ).exec((err, data) => {
            if (err) {
                console.log(err)
                return res.json({
                    err: "NOt able to find in database. " + err
                })
            }
            else {
                return res.send({
                    DATA: data
                })
            }

        })
    }
}

// { "name": { $regex: '.*' + colName + '.*' } },



