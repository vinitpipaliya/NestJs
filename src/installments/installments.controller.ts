import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { InstallmentsService } from './installments.service';
import { InstallmentDto } from './dto/installment.dto';

@Controller('installments')
export class InstallmentsController {
  constructor(private readonly installmentsService: InstallmentsService) { }

  @Post('/')
  addInstallment(@Body() InstallmentDto: InstallmentDto, @Req() req, @Res() res) {
    return this.installmentsService.addInstallment(InstallmentDto, req, res);
  }

}
