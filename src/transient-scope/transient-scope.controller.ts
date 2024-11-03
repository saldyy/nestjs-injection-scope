import { Controller, Get } from '@nestjs/common';
import { TransientScopeService } from './transient-scope.service';

@Controller('transient-scope')
export class TransientScopeController {
  constructor(private readonly transientScopeService: TransientScopeService) {}

  @Get('/count')
  getCount() {
    return this.transientScopeService.getCounter();
  }
}

@Controller({ path: 'transient-scope', version: '2' })
export class TransientScopeV2Controller {
  constructor(private readonly transientScopeService: TransientScopeService) {}

  @Get('/count')
  getCount() {
    return this.transientScopeService.getCounter();
  }
}
