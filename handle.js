const { createClient } = require('redis');

module.exports = class RedisHandler {
  connection = null;

  constructor(options) {
    this.connection = createClient(options);
    this.connection.connect();
  }

  async get(key){
    let v = await this.connection.get(key);

    try {
      return JSON.parse(v);
    } catch (e) {
      return v;
    }
  }

  async set(key, value) {
    let v = '';

    if (typeof value == 'object') v = JSON.stringify(value);
    else v = value;

    return await this.connection.set(key, v);
  }

  async del(key){
    return await this.connection.del(key);
  }
};
