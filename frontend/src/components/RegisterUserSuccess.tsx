import { useNavigate } from 'react-router-dom';

export const RegisterUserSuccess = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 1500);

  return (
    <div className="mx-auto mt-5 w-full max-w-xs rounded bg-orange">
      <h1 className="pt-5 text-center text-3xl font-bold text-blue-500">YOU'VE BEEN SUCCESSFULY REGISTERED</h1>
      <h2 className="text-md p-3 text-center text-blue-500 opacity-60">Happy swiping!</h2>
    </div>
  );
};
