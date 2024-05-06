const greeting = "Hello";

class Greeter {
  greet(person) {
    return `${greeting} ${person}!`;
  };
}

export { greeting, Greeter }