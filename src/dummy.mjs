// ES Module

const greeting = "Hello";

class Dummy {
  greet(person) {
    return `${greeting} ${person}!`;
  };
}

export { greeting, Dummy }