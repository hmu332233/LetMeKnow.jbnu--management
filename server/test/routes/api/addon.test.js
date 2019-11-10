const request = require('supertest');
const app = require('../../../app');

const { setupDB } = require('../../setupDb');
setupDB();

describe('addon', () => {
  test('quickReplies - status code 200', done => {
    request(app)
      .get('/api/v1/addon/quick-replies')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});