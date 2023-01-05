import { Module } from "@nestjs/common/decorators";
import{NestModule} from "@nestjs/common"
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { StudentMiddleware } from "./student.middleware";
import { StudentController } from "./app.controller";
import { StudentService } from "./student.service";
import { MongooseModule } from "@nestjs/mongoose";
import { StudentSchema } from "./schemas/student.schema";


@Module({
    imports:[
        MongooseModule.forFeature([{name:'Student',schema:StudentSchema}])
    ],
    exports:[],
    controllers:[StudentController],
    providers:[StudentService]
})

export class StudentModule implements NestModule{
    configure(consumer:MiddlewareConsumer){
        consumer.apply(StudentMiddleware).forRoutes("student")
    }
}