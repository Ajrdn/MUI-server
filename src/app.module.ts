import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskDataListController } from './task-data-list/task-data-list.controller';

@Module({
  imports: [],
  controllers: [AppController, TaskDataListController],
  providers: [AppService],
})
export class AppModule {}
