import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";


export class StudentPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        if(value.id==1) return value
        else throw new BadRequestException("Validation Failed.");
    }
}