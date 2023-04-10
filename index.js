const RedisHandler = require('./handle');

module.exports = {
  register(){
    let redis = {};

    global.Aloop.redis = (name = 'default') => {
      redis[name] = redis[name] || new RedisHandler(Aloop.config.redis.connections[name]);

      return redis[name];
    }
  },
  boot({app}) {}
};
