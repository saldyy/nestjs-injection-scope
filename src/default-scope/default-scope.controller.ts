import { Controller, Get } from '@nestjs/common';
import { DefaultScopeService } from './default-scope.service';

@Controller('default-scope')
export class DefaultScopeController {
  constructor(private readonly defaultScopeService: DefaultScopeService) {}

  @Get('/count')
  getCount() {
    return this.defaultScopeService.getCounter();
  }
}
