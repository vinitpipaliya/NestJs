import { Controller, Post, Get, Put, Delete, Req, HttpCode, ValidationPipe, Header, Redirect, Param, Body, ParseIntPipe } from "@nestjs/common"
import { StudentService } from "./student.service"
import { StudentDTO } from "./dto/student.dto";
import { StudentPipe } from "./pipes/student.pipe";

@Controller("student")

export class StudentController {

    // public StudentService:StudentService=new StudentService();
    constructor(private StudentService: StudentService) { }

    @Post("/add")
    addStudent(@Body(new ValidationPipe()) student: StudentDTO) {
        return this.StudentService.addStudent(student);
    }

    @Get("/get")
    async getStudent() {
        return this.StudentService.getStudent();
    }


    @Put("/update")
    updateStudent(@Body() student: StudentDTO) {
        return this.StudentService.updateStudent(student);
    }

    @Delete("/delete")
    deleteStudent(@Body() student: StudentDTO) {
        return this.StudentService.deleteStudent(student);
    }

    @Get("/all")
    @HttpCode(201)
    @Header('Radhe', 'Krishna')
    @Redirect('https://docs.nestjs.com', 302)
    findAll(@Req() request: Request): string {
        return "This Will Find ALl Students"
    }

    @Get("/find:id")
    findOne(@Param() params): string {
        return `This Will Return a #${params.id}`
    }
}