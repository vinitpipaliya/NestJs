import { Module } from '@nestjs/common';
import { InstallmentsService } from './installments.service';
import { InstallmentsController } from './installments.controller';

@Module({
  controllers: [InstallmentsController],
  providers: [InstallmentsService]
})
export class InstallmentsModule {}
