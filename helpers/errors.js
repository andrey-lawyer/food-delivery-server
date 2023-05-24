class FoodsError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends FoodsError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

module.exports = {
  FoodsError,
  ValidationError,
};
