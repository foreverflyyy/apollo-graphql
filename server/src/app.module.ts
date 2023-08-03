import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
  ],
})
export class AppModule {}