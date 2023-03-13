const RedisHandler = require('./handle');

module.exports = {
  register(){
    let redis = {};

    global.App.redis = (name = 'default') => {
      redis[name] = redis[name] || new RedisHandler(App.config.redis.connections[name]);

      return redis[name];
    }
  },
  boot({app}) {}
};
