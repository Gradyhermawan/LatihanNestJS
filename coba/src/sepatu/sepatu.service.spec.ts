import { Test, TestingModule } from '@nestjs/testing';
import { SepatuService } from './sepatu.service';

describe('SepatuService', () => {
  let service: SepatuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SepatuService],
    }).compile();

    service = module.get<SepatuService>(SepatuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
