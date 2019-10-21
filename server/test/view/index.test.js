const request = require('supertest');
const app = require('../../app');

describe('view', () => {
  test('should be 404', done => {
    request(app)
      .get('/not-found')
      .then(res => {
        expect(res.statusCode).toBe(404);
        done();
      })
  });
  test('should be 200', done => {
    request(app)
      .get('/login')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test('should be 302 when not logged in', done => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.statusCode).toBe(302);
        done();
      });
  });
});