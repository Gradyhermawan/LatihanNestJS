import { Test, TestingModule } from '@nestjs/testing';
import { BarangsService } from './barangs.service';

describe('BarangsService', () => {
  let service: BarangsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarangsService],
    }).compile();

    service = module.get<BarangsService>(BarangsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
