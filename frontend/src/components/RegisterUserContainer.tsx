import { v4 as uuidv4 } from 'uuid';
import { RegisterUserPres } from './RegisterUserPres';
import { Cookie, CookieSetOptions } from 'universal-cookie';
import * as yup from 'yup';
import { FormikHelpers } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { http_url } from '../context/Url_back';

const uuid_private = uuidv4();
const uuid_public = uuidv4();

export const userSchema = yup.object().shape({
  username: yup.string().matches(/^\w+$/, 'only letters, numbers and underscore').max(15).required(),
  uuid_public: yup.string().uuid().required(),
  uuid_private: yup.string().uuid().required(),
  email: yup.string().email().optional(),
});

export interface RegisterUser extends yup.InferType<typeof userSchema> {}

interface RegisterUserProps {
  setCookie: (
    name: 'ntflx_together_username' | 'ntflx_together_uuid_public' | 'ntflx_together_uuid_private',
    value: Cookie,
    options?: CookieSetOptions,
  ) => void;
}

const initialValues: RegisterUser = {
  username: '',
  uuid_private: uuid_private,
  uuid_public: uuid_public,
  email: '',
};

const registerUser = (values: RegisterUser) => {
  return axios.post(`${http_url}/register`, values, { headers: { 'Content-Type': 'application/json' } });
};

export const RegisterUserContainer = ({ setCookie }: RegisterUserProps) => {
  const navigate = useNavigate();
  const handleSubmit = async (values: RegisterUser, helpers: FormikHelpers<RegisterUser>) => {
    try {
      const response = await registerUser(values);
      console.log(response.data);
      if (response.status === 200) {
        setCookie('ntflx_together_username', values.username, { maxAge: 2592000, sameSite: true });
        setCookie('ntflx_together_uuid_public', values.uuid_public, { maxAge: 2592000, sameSite: true });
        setCookie('ntflx_together_uuid_private', values.uuid_private, { maxAge: 2592000, sameSite: true });
      }
    } catch (error) {
      console.log(error);
    }
    console.log(values);
    setTimeout(() => {
      navigate('/success');
    }, 800);
  };

  return <RegisterUserPres onSubmit={handleSubmit} initialValues={initialValues} />;
};
