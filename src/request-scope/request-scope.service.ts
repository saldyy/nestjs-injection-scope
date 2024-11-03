import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestScopeService {
  private count: number;

  constructor() {
    this.count = 0;
  }

  getCounter() {
    return { count: this.count++ };
  }
}