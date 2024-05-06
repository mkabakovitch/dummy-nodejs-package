const Mathematics = require('../dist/mathematics');

describe('Mathematics Module', () => {

  describe('Mathematics Class', () => {

    const mathematics = new Mathematics();

    describe('Operations', () => {

      test('add random numbers', () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        expect(mathematics.add(a, b)).toEqual(a + b);
      });

      test('substract random numbers', () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        expect(mathematics.substract(a, b)).toEqual(a - b);
      });

      test('multiply random numbers', () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        expect(mathematics.multiply(a, b)).toEqual(a * b);
      });

      test('divide random numbers', () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 99 + 1);
        expect(mathematics.divide(a, b)).toEqual(a / b);
      });
    });

    describe('Constants', () => {

      test('get pi', () => {
        expect(Mathematics.pi).toEqual(Math.PI);
      });
    });
  });
});
