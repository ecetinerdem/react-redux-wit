import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../store/actions/usersActions.js';

export default function Users() {
  const users = useSelector((store) => store.users.userList);
  const loading = useSelector((store) => store.users.loading);
  const error = useSelector((store) => store.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) <p>loading...</p>;
  if (error) <p>{error}</p>;

  return users.map((user) => (
    <p key={user.id}>{user.first_name + ' ' + user.last_name}</p>
  ));
}
