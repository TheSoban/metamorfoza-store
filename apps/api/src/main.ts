import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AppConfigService } from './config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(AppConfigService);

  const port = configService.get('general.port');
  const dashboardOrigin = configService.get('cors.dashboardOrigin');
  const storeOrigin = configService.get('cors.storeOrigin');

  configureCors(app, storeOrigin, dashboardOrigin);

  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}!`);
}

function configureCors(app: NestExpressApplication, ...origin: string[]) {
  app.enableCors({
    origin,
    credentials: true,
  });

  Logger.log(`⚙️ CORS configured for: ${origin.join(', ')}!`);
}

bootstrap();
