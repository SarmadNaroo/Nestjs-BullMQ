import { Controller, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { QueueService } from 'src/queue/queue.service';

@Controller('task')
export class TaskController {
  constructor(private readonly queueService: QueueService) {}

  @Post()
  async create(@Body() body: any) {
    await this.queueService.addTask(body);
    return { message: 'Task added to queue' };
  }
}
