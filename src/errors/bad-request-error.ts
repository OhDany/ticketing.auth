import { CustomError } from './custom-error';

export class BaddRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BaddRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
