import { Test, TestingModule } from '@nestjs/testing';
import { SepatuController } from './sepatu.controller';
import { SepatuService } from './sepatu.service';

describe('SepatuController', () => {
  let controller: SepatuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SepatuController],
      providers: [SepatuService],
    }).compile();

    controller = module.get<SepatuController>(SepatuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
