import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/reques-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log('Handling this error as request validation error');
  }

  if (err instanceof DatabaseConnectionError) {
    console.log('Handling this error as a db connecton error');
  }

  res.status(400).send({
    message: err.message,
  });
};
