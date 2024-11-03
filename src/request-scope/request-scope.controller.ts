import { Controller, Get } from '@nestjs/common';
import { RequestScopeService } from './request-scope.service';

@Controller('request-scope')
export class RequestScopeController {
  constructor(private readonly requestScopeService: RequestScopeService) {}

  @Get('/count')
  getCount() {
    return this.requestScopeService.getCounter();
  }
}
