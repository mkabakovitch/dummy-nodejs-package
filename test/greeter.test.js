const { greeting, Greeter } = require('../dist/greeter');

describe('Greeter Module', () => {

  const hello = "Hello";
  const max = 'Max';

  describe('Constants', () => {

    test('get greeting', () => {
      expect(greeting).toEqual(hello);
    });
  });

  describe('Greeter Class', () => {

    const greeter = new Greeter();

    test('greet', () => {
      expect(greeter.greet(max)).toEqual(`${hello} ${max}!`);
    });
  });
});
