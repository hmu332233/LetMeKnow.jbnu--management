const request = require('supertest');
const app = require('../../../app');

const { setupDB } = require('../../setupDb');
setupDB();

describe('menus', () => {
  test('medi - status code 200', done => {
    request(app)
      .get('/api/v1/menus/medi')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test('jinsu - status code 200', done => {
    request(app)
      .get('/api/v1/menus//jinsu')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test('studentHall - status code 200', done => {
    return request(app)
      .get('/api/v1/menus//studentHall')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test('jungdam - status code 200', done => {
    return request(app)
      .get('/api/v1/menus//jungdam')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test('hu - status code 200', done => {
    return request(app)
      .get('/api/v1/menus//hu')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
