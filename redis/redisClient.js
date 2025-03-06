const redis = require('redis');

const redisClient = redis.createClient({
    socket: {
        host: 'localhost', // e.g., localhost or ElastiCache endpoint
        port: 6379
    }
});

redisClient.connect()
  .then(() => console.log('Connected to Redis'))
  .catch(err => console.error('Redis Connection Error:', err));

module.exports = redisClient;
