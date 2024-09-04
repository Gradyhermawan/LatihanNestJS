import { Test, TestingModule } from '@nestjs/testing';
import { KayuService } from './kayu.service';

describe('KayuService', () => {
  let service: KayuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KayuService],
    }).compile();

    service = module.get<KayuService>(KayuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
