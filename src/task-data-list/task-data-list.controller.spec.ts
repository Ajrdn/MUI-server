import { Test, TestingModule } from '@nestjs/testing';
import { TaskDataListController } from './task-data-list.controller';

describe('TaskDataListController', () => {
  let controller: TaskDataListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskDataListController],
    }).compile();

    controller = module.get<TaskDataListController>(TaskDataListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
