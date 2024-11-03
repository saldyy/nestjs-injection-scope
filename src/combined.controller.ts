import { Controller, Get } from '@nestjs/common';
import { DefaultScopeService } from './default-scope/default-scope.service';
import { RequestScopeService } from './request-scope/request-scope.service';
import { TransientScopeService } from './transient-scope/transient-scope.service';

@Controller('combined')
export class CombinedScopeController {
  constructor(
    private readonly defaultScopeService: DefaultScopeService,
    private readonly requestScopeService: RequestScopeService,
    private readonly transientScopeService: TransientScopeService,
  ) {}

  @Get('/count')
  getCount() {
    return {
      defaultCount: this.defaultScopeService.getCounter(),
      requestCount: this.requestScopeService.getCounter(),
      transientCount: this.transientScopeService.getCounter(),
    };
  }
}
