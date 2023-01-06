import { Controller, Post, Get, Put, Delete, Req, HttpCode, ValidationPipe, Header, Redirect, Param, Body, ParseIntPipe, Res } from "@nestjs/common"
import { StudentService } from "./student.service"
import { StudentDTO } from "./dto/student.dto";
import { StudentPipe } from "./pipes/student.pipe";

@Controller("student")

export class StudentController {

    // public StudentService:StudentService=new StudentService();
    constructor(private StudentService: StudentService) { }

    @Post("/add")
    addStudent(@Body(new ValidationPipe()) student: StudentDTO, @Req() req, @Res() res) {
        return this.StudentService.addStudent(student, req, res);
    }

    @Get("/get")
    async getStudent(@Req() req, @Res() res) {
        return this.StudentService.getStudent(req, res);
    }


    @Put("/update")
    updateStudent(@Body() student: StudentDTO, @Req() req, @Res() res) {
        return this.StudentService.updateStudent(student, req, res);
    }

    @Delete("/delete")
    deleteStudent(@Body() student: StudentDTO, @Req() req, @Res() res) {
        return this.StudentService.deleteStudent(student, req, res);
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

    @Get('/studentAndInst')
    allStudentWithInstallment(@Body() student: StudentDTO, @Req() req, @Res() res) {
        return this.StudentService.allStudentWithInstallment(student, req, res);
    }

    @Get('/search')
    findBySearch(@Body() student: StudentDTO, @Req() req, @Res() res) {
        return this.StudentService.findBySearch(student, req, res);
    }
}