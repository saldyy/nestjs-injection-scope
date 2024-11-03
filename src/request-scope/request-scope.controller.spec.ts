import { Test, TestingModule } from '@nestjs/testing';
import { RequestScopeController } from './request-scope.controller';

describe('RequestScopeController', () => {
  let controller: RequestScopeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestScopeController],
    }).compile();

    controller = module.get<RequestScopeController>(RequestScopeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
