import { RegisterUser, userSchema } from './RegisterUserContainer';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';

interface RegisterUserPresProps {
  onSubmit: (values: RegisterUser, helpers: FormikHelpers<RegisterUser>) => void | Promise<any>;
  initialValues: RegisterUser;
}

export const RegisterUserPres = (props: RegisterUserPresProps) => {
  const { onSubmit, initialValues } = props;
  return (
    <div className="mx-auto mt-5 w-full max-w-xs rounded bg-orange">
      <h1 className="pt-5 text-center text-2xl font-bold text-blue-500">REGISTER</h1>
      <h2 className="text-md p-3 text-center text-blue-500 opacity-60">
        Please provide your username.
        <br /> You won't need to login in the future.
      </h2>
      <Formik<RegisterUser> validationSchema={userSchema} onSubmit={onSubmit} initialValues={initialValues}>
        {({ errors, touched, isValid }) => (
          <Form className="mb-4 rounded px-8 pb-8 pt-4 text-blue-500 shadow-md">
            <Field
              autoFocus
              className={`${
                touched.username && errors.username ? 'border-2 border-red-500 ' : 'border'
              }}focus:shadow-outline w-full appearance-none rounded px-3 py-2 leading-tight shadow focus:outline-none`}
              type="input"
              name="username"
              placeholder="Username"
            />
            <ErrorMessage
              className="mt-1 rounded bg-white px-3  py-1 text-sm text-red-500"
              name="username"
              component="div"
            />
            {/* <Field type="email" name="emailAddress" placeholder="Email - optional*" /> */}
            <button
              disabled={!isValid}
              className={`${
                !isValid ? 'border-red-500 ' : 'border-info-500 hover:bg-info-300 '
              }disabled:bg-red focus:shadow-outline mb-4 mt-8 rounded border-2 bg-white px-4 py-2  font-bold text-blue-500 shadow transition-colors duration-200  focus:outline-none disabled:border-slate-200 disabled:text-slate-500 disabled:shadow-none`}
              type="submit"

              //   {!isValid || Object.keys(touched).length === 0}
            >
              Create user
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
