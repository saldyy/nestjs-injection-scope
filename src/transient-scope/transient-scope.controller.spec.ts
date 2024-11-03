import { Test, TestingModule } from '@nestjs/testing';
import { TransientScopeController } from './transient-scope.controller';

describe('TransientScopeController', () => {
  let controller: TransientScopeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransientScopeController],
    }).compile();

    controller = module.get<TransientScopeController>(TransientScopeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
