import { ConfigModule, ConfigService } from '@nestjs/config';
import { Queue } from 'bullmq';
import { RedisOptions } from 'ioredis';

export const redisOptions = {
  host: process.env.REDIS_HOST || 'redis',
  port: Number(process.env.REDIS_PORT) || 6379,
} as RedisOptions;
