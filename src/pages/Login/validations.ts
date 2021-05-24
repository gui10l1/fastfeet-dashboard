import * as Yup from 'yup';

interface IData {
  [key: string]: string;
}

export const formValidation = async (data: IData): Promise<void> => {
  const shape = Yup.object().shape({
    cpf: Yup.string().required('All fields are required!'),
    password: Yup.string().required('All fields are required!'),
  });

  await shape.validate(data, {
    abortEarly: false,
  });
};
