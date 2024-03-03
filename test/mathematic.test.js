const Mathematic = require('../dist/mathematic');

describe('Mathematic Module', () => {

  describe('Mathematic Class', () => {

    const mathematic = new Mathematic();

    describe('Operations', () => {

      test('add random numbers', () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        expect(mathematic.add(a, b)).toEqual(a + b);
      });

      test('substract random numbers', () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        expect(mathematic.substract(a, b)).toEqual(a - b);
      });

      test('multiply random numbers', () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 100);
        expect(mathematic.multiply(a, b)).toEqual(a * b);
      });

      test('divide random numbers', () => {
        const a = Math.floor(Math.random() * 100);
        const b = Math.floor(Math.random() * 99 + 1);
        expect(mathematic.divide(a, b)).toEqual(a / b);
      });
    });

    describe('Constants', () => {

      test('get pi', () => {
        expect(Mathematic.pi).toEqual(Math.PI);
      });
    });
  });
});
