const common = require('./index');

describe('common', () => {
  describe('cleanObject', () => {
    test('{ a: null, b: 1 } => { b: 1 }', () => {
      const obj = { a: null, b: 1 };
      const result = common.cleanObject(obj);

      expect(result.a).toEqual(undefined);
      expect(result.b).toEqual(1);
    });
  });
});
