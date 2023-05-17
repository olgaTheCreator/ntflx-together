import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';
import { RegisterUserPres } from './RegisterUserPres';
import * as yup from 'yup';
import { ErrorMessage, FormikHelpers } from 'formik';
import axios from 'axios';

const uuid_private = uuidv4();
const uuid_public = uuidv4();

export const userSchema = yup.object().shape({
  username: yup.string().matches(/^\w+$/, 'only letters, numbers and underscore').max(15).required(),
  uuid_public: yup.string().uuid().required(),
  uuid_private: yup.string().uuid().required(),
  email: yup.string().email().optional(),
});

export interface RegisterUser extends yup.InferType<typeof userSchema> {}

const initialValues: RegisterUser = {
  username: '',
  uuid_private: uuid_private,
  uuid_public: uuid_public,
  email: '',
};

const registerUser = (values: RegisterUser) => {
  return axios.post('http://0.0.0.0:3000/register', values, { headers: { 'Content-Type': 'application/json' } });
  // .then((res) => console.log(res));
};

export const RegisterUserContainer = () => {
  const [cookies, setCookie] = useCookies(['ntflx_user']);
  const handleSubmit = async (values: RegisterUser, helpers: FormikHelpers<RegisterUser>) => {
    try {
      const response = await registerUser(values);
      console.log(response.data);
    } catch (Error) {
      console.log(ErrorMessage);
    } finally {
    }
    console.log(values);
  };

  return <RegisterUserPres onSubmit={handleSubmit} initialValues={initialValues} />;
};
