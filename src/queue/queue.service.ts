import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { redisOptions } from '../config/redis.config';

@Injectable()
export class QueueService {
  public readonly taskQueue: Queue;

  constructor() {
    this.taskQueue = new Queue('task-queue', { connection: redisOptions });
  }

  async addTask(data: any) {
    await this.taskQueue.add('task-job', data);
  }
}
