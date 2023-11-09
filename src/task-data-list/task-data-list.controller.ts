import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import * as dayjs from 'dayjs';

interface TaskData {
  id?: string;
  workDate: string;
  lotNo: string;
  variety: string;
  standard: string;
  length: string;
  weight: string;
}

const today = dayjs();

let taskDataList: TaskData[] = [
  {
    id: '0001',
    workDate: today.format('YYYY-MM-DD'),
    lotNo: '231017-1k-01',
    variety: 'C7060P1',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    id: '0002',
    workDate: today.format('YYYY-MM-DD'),
    lotNo: '231017-1k-02',
    variety: 'C7060P1',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    id: '0003',
    workDate: today.format('YYYY-MM-DD'),
    lotNo: '231017-1k-03',
    variety: 'C7060P2',
    standard: '170x320',
    length: '2805',
    weight: '1735',
  },
  {
    id: '0004',
    workDate: today.format('YYYY-MM-DD'),
    lotNo: '231017-1k-01',
    variety: 'C7060P1',
    standard: '170x320',
    length: '2805',
    weight: '1735',
  },
  {
    id: '0005',
    workDate: today.format('YYYY-MM-DD'),
    lotNo: '231017-1k-02',
    variety: 'C7060P1',
    standard: '170x320',
    length: '2565',
    weight: '1338',
  },
  {
    id: '0006',
    workDate: today.format('YYYY-MM-DD'),
    lotNo: '231017-1k-03',
    variety: 'C7060P2',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    id: '0007',
    workDate: today.subtract(1, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-04',
    variety: 'C7060P2',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    id: '0008',
    workDate: today.subtract(1, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-05',
    variety: 'C7060P3',
    standard: '280x320',
    length: '2805',
    weight: '1735',
  },
  {
    id: '0009',
    workDate: today.subtract(1, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-06',
    variety: 'C7060P3',
    standard: '280x320',
    length: '1235',
    weight: '435',
  },
  {
    id: '0010',
    workDate: today.subtract(2, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-07',
    variety: 'C7060P4',
    standard: '280x320',
    length: '1235',
    weight: '435',
  },
  {
    id: '0011',
    workDate: today.subtract(2, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-08',
    variety: 'C7060P4',
    standard: '280x320',
    length: '1235',
    weight: '435',
  },
  {
    id: '0012',
    workDate: today.subtract(2, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-09',
    variety: 'C7060P5',
    standard: '380x360',
    length: '1235',
    weight: '435',
  },
  {
    id: '0013',
    workDate: today.subtract(3, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-10',
    variety: 'C7060P5',
    standard: '380x360',
    length: '1235',
    weight: '435',
  },
];

@Controller('taskDataList')
export class TaskDataListController {
  @Get()
  getTaskDataList() {
    return taskDataList;
  }

  @Get(':date')
  getTaskDataListByDate(@Param('date') date: string) {
    return taskDataList.filter((taskData) => taskData.workDate === date);
  }

  @Post(':date')
  addTaskData(@Param('date') date: string, @Body() taskData: TaskData) {
    const id: string = taskDataList.reduce(
      (maxId: string, taskData: TaskData) => {
        if (parseInt(taskData.id) > parseInt(maxId)) return taskData.id;
        return maxId;
      },
      '0',
    );
    taskDataList.push({
      ...taskData,
      id: (parseInt(id) + 1).toString().padStart(4, '0'),
    });
    return taskDataList.filter((taskData) => taskData.workDate === date);
  }

  @Post('/update/:date')
  updateTaskData(
    @Param('date') date: string,
    @Body() taskDataClient: TaskData,
  ) {
    taskDataList = taskDataList.map((taskData) => {
      if (taskData.id === taskDataClient.id) return taskDataClient;
      return taskData;
    });
    return taskDataList.filter((taskData) => taskData.workDate === date);
  }

  @Put(':date')
  addTaskDataByList(
    @Param('date') date: string,
    @Body() newTaskDataList: TaskData[],
  ) {
    const id: string = taskDataList.reduce(
      (maxId: string, taskData: TaskData) => {
        if (parseInt(taskData.id) > parseInt(maxId)) return taskData.id;
        return maxId;
      },
      '0',
    );
    const newTaskDataListWithId = newTaskDataList.map((taskData, index) => ({
      ...taskData,
      id: (parseInt(id) + index + 1).toString().padStart(4, '0'),
    }));
    taskDataList.push(...newTaskDataListWithId);
    return taskDataList.filter((taskData) => taskData.workDate === date);
  }

  @Delete('/:date')
  deleteTaskData(
    @Param('date') date: string,
    @Body() deleteTaskData: TaskData,
  ) {
    taskDataList = taskDataList.filter(
      (taskData) => taskData.id !== deleteTaskData.id,
    );
    return taskDataList.filter((taskData) => taskData.workDate === date);
  }
}
