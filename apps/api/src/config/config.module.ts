import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { configSchema } from '@metamorfoza/shared-validation';
import { corsConfigLoader, databaseConfigLoader, generalConfigLoader, sessionConfigLoader } from './config.loaders';
import { AppConfigService } from './config.service';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [generalConfigLoader, databaseConfigLoader, sessionConfigLoader, corsConfigLoader],
      validate: (config) => configSchema.parse(config),
      validationOptions: {
        allowUnknown: false,
        abortEarly: true,
      },
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class ConfigModule {}
