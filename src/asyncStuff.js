import express from 'express';
import request from 'supertest';

export default class Stuff {
  constructor() {
    this.app = express();
    this.app.get('/', async (req, res) => {
      await this.fn(req);
      res.json({});
    });
  }

  async withReq(fn) {
    this.fn = fn;
    await request(this.app).get('/');
  }

  async doStuff() {
    await Promise.delay(250);
      console.log('Done');
  }
}
