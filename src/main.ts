import { NestFactory } from '@nestjs/core';
import { NextFunction } from 'express';
import { RootModule } from './root.module';

function globalMiddleware(req:Request,res:Response,next:NextFunction){
  console.log("This is Golabal Middleware which is called any request in NestJs.")
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleware)
  await app.listen(3000);
}
bootstrap();
