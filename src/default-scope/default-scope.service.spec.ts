import { Test, TestingModule } from '@nestjs/testing';
import { DefaultScopeService } from './default-scope.service';

describe('DefaultScopeService', () => {
  let service: DefaultScopeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultScopeService],
    }).compile();

    service = module.get<DefaultScopeService>(DefaultScopeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
