import { Controller, Body, Param, Get, Post } from '@nestjs/common';

interface TaskData {
  workDate: string;
  lotNo: string;
  variety: string;
  standard: string;
  length: string;
  weight: string;
}

const taskDataList: TaskData[] = [
  {
    workDate: '2023-10-24',
    lotNo: '231017-1k-01',
    variety: 'C7060P1',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    workDate: '2023-10-24',
    lotNo: '231017-1k-02',
    variety: 'C7060P1',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    workDate: '2023-10-24',
    lotNo: '231017-1k-03',
    variety: 'C7060P2',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    workDate: '2023-10-25',
    lotNo: '231017-1k-04',
    variety: 'C7060P2',
    standard: '180x420',
    length: '2805',
    weight: '1735',
  },
  {
    workDate: '2023-10-25',
    lotNo: '231017-1k-05',
    variety: 'C7060P3',
    standard: '280x320',
    length: '2805',
    weight: '1735',
  },
  {
    workDate: '2023-10-25',
    lotNo: '231017-1k-06',
    variety: 'C7060P3',
    standard: '280x320',
    length: '1235',
    weight: '435',
  },
  {
    workDate: '2023-10-26',
    lotNo: '231017-1k-07',
    variety: 'C7060P4',
    standard: '280x320',
    length: '1235',
    weight: '435',
  },
  {
    workDate: '2023-10-26',
    lotNo: '231017-1k-08',
    variety: 'C7060P4',
    standard: '280x320',
    length: '1235',
    weight: '435',
  },
  {
    workDate: '2023-10-26',
    lotNo: '231017-1k-09',
    variety: 'C7060P5',
    standard: '380x360',
    length: '1235',
    weight: '435',
  },
  {
    workDate: '2023-10-27',
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
    console.log(taskData);
    taskDataList.push(taskData);
    return taskDataList.filter((taskData) => taskData.workDate === date);
  }
}
