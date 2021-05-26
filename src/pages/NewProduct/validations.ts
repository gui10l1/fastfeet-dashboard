import * as Yup from 'yup';

interface IData {
  [key: string]: string;
}

export const formValidation = async (data: IData): Promise<void> => {
  const validationShape = Yup.object().shape({
    name: Yup.string().required('All fields are required!'),
    price: Yup.number()
      .typeError('This field must be a number')
      .required('All fields are required!'),
    description: Yup.string().required('All fields are required!'),
    quantityInStock: Yup.number()
      .typeError('This field must be a number')
      .required('All fields are required!'),
  });

  await validationShape.validate(data, {
    abortEarly: false,
  });
};
