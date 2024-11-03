import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class TransientScopeService {
  private count: number;

  constructor() {
    this.count = 0;
  }

  getCounter() {
    return { count: this.count++ };
  }
}
