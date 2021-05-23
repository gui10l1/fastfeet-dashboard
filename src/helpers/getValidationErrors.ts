import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export const getValidationErrors = (err: ValidationError): IErrors => {
  const errors: IErrors = {};

  err.inner.forEach(item => {
    errors[item.path || ''] = item.message;
  });

  return errors;
};
