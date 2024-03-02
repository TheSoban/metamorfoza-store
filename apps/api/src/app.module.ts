import { Module } from '@nestjs/common';
import { ConfigModule } from './config';
import { AppService } from './app.service';
import { DatabaseModule } from './database';

@Module({
  providers: [AppService],
  imports: [
    DatabaseModule,
    ConfigModule
  ],
})
export class AppModule {}
