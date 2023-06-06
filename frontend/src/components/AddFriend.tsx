import { useNavigate, useParams } from 'react-router-dom';

export const AddFriend = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="mx-auto mt-5 w-full max-w-xs rounded bg-orange">
      <p>Add friend? </p>
    </div>
  );
};
