import { Worker } from 'bullmq';
import { redisOptions } from '../config/redis.config';

const worker = new Worker(
  'task-queue',
  async (job) => {
    console.log(`🔥 [Worker] Processing job ${job.id}`, job.data);
    await new Promise((res) => setTimeout(res, 1000));
  },
  { connection: redisOptions },
);

worker.on('completed', (job) => {
  console.log(`✅ [Worker] Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
  console.error(`❌ [Worker] Job ${job?.id} failed`, err);
});
