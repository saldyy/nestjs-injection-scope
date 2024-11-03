import { Test, TestingModule } from '@nestjs/testing';
import { TransientScopeService } from './transient-scope.service';

describe('TransientScopeService', () => {
  let service: TransientScopeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransientScopeService],
    }).compile();

    service = module.get<TransientScopeService>(TransientScopeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
