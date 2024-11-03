import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class DefaultScopeService {
  private count: number;

  constructor() {
    this.count = 0;
  }

  getCounter() {
    return { count: this.count++ };
  }
}
