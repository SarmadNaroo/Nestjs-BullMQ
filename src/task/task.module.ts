import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { QueueModule } from 'src/queue/queue.module';
import { TaskController } from './task.controller';

@Module({
  imports: [QueueModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
