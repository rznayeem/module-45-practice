import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="grid grid-cols-3">
      {users.map(user => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default Users;
