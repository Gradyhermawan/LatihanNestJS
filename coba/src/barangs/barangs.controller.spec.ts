import { Test, TestingModule } from '@nestjs/testing';
import { BarangsController } from './barangs.controller';
import { BarangsService } from './barangs.service';

describe('BarangsController', () => {
  let controller: BarangsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarangsController],
      providers: [BarangsService],
    }).compile();

    controller = module.get<BarangsController>(BarangsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
