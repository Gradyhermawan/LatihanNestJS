import { Test, TestingModule } from '@nestjs/testing';
import { KayuController } from './kayu.controller';
import { KayuService } from './kayu.service';

describe('KayuController', () => {
  let controller: KayuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KayuController],
      providers: [KayuService],
    }).compile();

    controller = module.get<KayuController>(KayuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
