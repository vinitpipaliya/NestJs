import { IsString, IsDate, IsInt } from "class-validator"

export class StudentDTO {

    _id: string;

    @IsString()
    name: string;

    @IsInt()
    fees: number;

    @IsString()
    redate: string

    @IsString()
    area: string;
}