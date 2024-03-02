import { ConfigService, Path } from '@nestjs/config';
import { AppConfig } from '@metamorfoza/shared-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfigService extends ConfigService<AppConfig, true> {
  get<P extends Path<AppConfig>>(propertyPath: P) {
    return super.get<AppConfig, P>(propertyPath, { infer: true });
  }
}
