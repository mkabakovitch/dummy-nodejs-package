const { greeting, Dummy } = require('../dist/dummy');

describe('Dummy Module', () => {

  const hello = "Hello";
  const max = 'Max';

  describe('Constants', () => {

    test('get greeting', () => {
      expect(greeting).toEqual(hello);
    });
  });

  describe('Dummy Class', () => {

    const dummy = new Dummy();

    test('greet', () => {
      expect(dummy.greet(max)).toEqual(`${hello} ${max}!`);
    });
  });
});
