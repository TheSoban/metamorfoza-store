import { Module } from '@nestjs/common';
import { ConfigModule } from './config';
import { AppService } from './app.service';

@Module({
  providers: [AppService],
  imports: [ConfigModule],
})
export class AppModule {}
