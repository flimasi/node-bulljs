'use strict'

const Env = use('Env')

module.exports = {
  // redis connection
  connection: Env.get('BULL_CONNECTION', 'local'),
  local: {
    redis: {
      host: Env.get('REDIS_HOST', 'local'),
      port: Env.get('REDIS_PORT', '6379'),
      password: null,
      db: 0,
      keyPrefix: '',
    },
  },
  preprod: {
    redis: {
      host: Env.get('REDIS_HOST', 'local'),
      port: Env.get('REDIS_PORT', '6379'),
      password: null,
      db: 0,
      keyPrefix: '',
    },
  },
  production: {
    redis: {
      host: Env.get('REDIS_HOST', 'local'),
      port: Env.get('REDIS_PORT', '6379'),
      password: null,
      db: 0,
      keyPrefix: '',
    },
  },
  remote: 'redis://redis.example.com?password=correcthorsebatterystaple',
}
