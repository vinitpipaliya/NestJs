import { Module } from '@nestjs/common';
import { InstallmentsService } from './installments.service';
import { InstallmentsController } from './installments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InstallmentSchema } from './schemas/installment.schema';

@Module({
  controllers: [InstallmentsController],
  providers: [InstallmentsService],
  imports: [MongooseModule.forFeature([{ name: 'Installment', schema: InstallmentSchema }])],
  exports: []
})
export class InstallmentsModule { }
