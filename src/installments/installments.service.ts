import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InstallmentDto } from './dto/installment.dto';
import { Installment } from './interfaces/installment.interface';

@Injectable()
export class InstallmentsService {

    constructor(
        @InjectModel('Installment') private receipeModel: Model<Installment>
    ) { }

    async addInstallment(InstallmentDto: InstallmentDto, req, res): Promise<any> {
        const receipe = await new this.receipeModel(InstallmentDto);
        receipe.save((err, data) => {
            if (err) {
                return res.json({
                    err: "Not able to save in database. " + err
                })
            }
            else {
                return res.json({
                    message: "Successfully Inserted."
                })
            }
        })
    }
}
