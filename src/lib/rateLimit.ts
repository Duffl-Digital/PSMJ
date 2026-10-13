import { RateLimiterRedis } from "rate-limiter-flexible";
import { redis } from "./redis";

export const rateLimiter = new RateLimiterRedis({
  storeClient: redis,
  keyPrefix: "contact-form",
  points: 5,      // 5 requests
  duration: 60,   // per 60 seconds
});