import { Module } from '@nestjs/common';
import { RequestScopeController } from './request-scope/request-scope.controller';
import {
  TransientScopeController,
  TransientScopeV2Controller,
} from './transient-scope/transient-scope.controller';
import { DefaultScopeController } from './default-scope/default-scope.controller';
import { RequestScopeService } from './request-scope/request-scope.service';
import { TransientScopeService } from './transient-scope/transient-scope.service';
import { DefaultScopeService } from './default-scope/default-scope.service';
import { CombinedScopeController } from './combined.controller';

@Module({
  imports: [],
  controllers: [
    CombinedScopeController,
    RequestScopeController,
    TransientScopeController,
    TransientScopeV2Controller,
    DefaultScopeController,
  ],
  providers: [RequestScopeService, TransientScopeService, DefaultScopeService],
})
export class AppModule {}
