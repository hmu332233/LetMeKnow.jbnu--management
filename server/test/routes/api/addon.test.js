const request = require('supertest');
const app = require('../../../app');

const { setupDB } = require('../../setupDb');
setupDB();

describe('addon', () => {
  test('get quickReplies - status code 200', done => {
    request(app)
      .get('/api/v1/addon/quick-replies')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  test('post quickReplies - status code 400 - without label', done => {
    request(app)
      .post('/api/v1/addon/quick-replies')
      .send({ messageText: 'test' })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(400);
        done();
      });
  });

  test('post quickReplies - status code 400 - without messageText', done => {
    request(app)
      .post('/api/v1/addon/quick-replies')
      .send({ label: 'test' })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(400);
        done();
      });
  });

  test('post quickReplies - status code 200', done => {
    request(app)
      .post('/api/v1/addon/quick-replies')
      .send({ label: 'test', messageText: 'test' })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
