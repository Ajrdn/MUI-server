import { Controller, Body, Param, Get, Post, Put } from '@nestjs/common';
import * as dayjs from 'dayjs';

interface TaskData {
  workDate: string;
  lotNo: string;
  variety: string;
  standard: string;
  length: string;
  weight: string;
}

const today = dayjs();

const taskDataList: TaskData[] = [
  {
    workDate: today.format('YYYY-MM-DD'),
    lotNo: '231017-1k-01',
    variety: 'C7060P1',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    workDate: today.format('YYYY-MM-DD'),
    lotNo: '231017-1k-02',
    variety: 'C7060P1',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    workDate: today.format('YYYY-MM-DD'),
    lotNo: '231017-1k-03',
    variety: 'C7060P2',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    workDate: today.add(1, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-04',
    variety: 'C7060P2',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    workDate: today.add(1, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-05',
    variety: 'C7060P3',
    standard: '280x320',
    length: '2805',
    weight: '1735',
  },
  {
    workDate: today.add(1, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-06',
    variety: 'C7060P3',
    standard: '280x320',
    length: '1235',
    weight: '435',
  },
  {
    workDate: today.add(2, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-07',
    variety: 'C7060P4',
    standard: '280x320',
    length: '1235',
    weight: '435',
  },
  {
    workDate: today.add(2, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-08',
    variety: 'C7060P4',
    standard: '280x320',
    length: '1235',
    weight: '435',
  },
  {
    workDate: today.add(2, 'day').format('YYYY-MM-DD'),
    lotNo: '231017-1k-09',
    variety: 'C7060P5',
    standard: '380x360',
    length: '1235',
    weight: '435',
  },
  {
    workDate: today.add(3, 'day').format('YYYY-MM-DD'),
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
    taskDataList.push(taskData);
    return taskDataList.filter((taskData) => taskData.workDate === date);
  }

  @Put(':date')
  addTaskDataByList(
    @Param('date') date: string,
    @Body() newTaskDataList: TaskData[],
  ) {
    taskDataList.push(...newTaskDataList);
    console.log(newTaskDataList);
    console.log('------------------------');
    console.log(taskDataList);
    return taskDataList.filter((taskData) => taskData.workDate === date);
  }
}
