import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';
import { RegisterUserPres } from './RegisterUserPres';
import * as yup from 'yup';
import { Formik, Field, Form, FormikHelpers } from 'formik';

const userSchema = yup.object().shape({
  name: yup.string().required(),
});

type User = yup.InferType<typeof userSchema>;

interface RegisterUser {
  name: User;
  uuid_public: string;
  uuid_private: string;
}

const initialValues: User = {
  name: '',
};

const handleSubmit = (values: RegisterUser, helpers: FormikHelpers<User>) => {};

export const RegisterUserContainer = () => {
  const uuid_private = uuidv4();
  const uuid_public = uuidv4();
  const [cookies, setCookie] = useCookies(['ntflx_user']);
  return <RegisterUserPres />;
};
