import { Module } from '@nestjs/common';
import { InstallmentsModule } from './installments/installments.module';
import { StudentModule } from './student/data/student.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Vinit:Vinit@cluster0.kc6kup8.mongodb.net/raam?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true })
    , InstallmentsModule, StudentModule],
  controllers: [],
  providers: [],
  exports: []
})
export class RootModule {
  constructor() {
    console.log("Jay Shree Krishna")
  }
}
