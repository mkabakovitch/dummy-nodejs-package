// CommonJS Module

module.exports = class Mathematic {

  add(a, b) {
    return a + b;
  };

  substract(a, b) {
    return a - b;
  };

  multiply(a, b) {
    return a * b;
  };

  divide(a, b) {
    return a / b;
  };

  static get pi() {
    return Math.PI;
  }
}
