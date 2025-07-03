import { Processor, Worker } from 'bullmq';
import { redisOptions } from '../config/redis.config';

const worker = new Worker(
  'task-queue',
  async (job) => {
    console.log(`Processing job: ${job.id}`, job.data);
  },
  { connection: redisOptions },
);

worker.on('completed', (job) => {
  console.log(`Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed:`, err);
});
