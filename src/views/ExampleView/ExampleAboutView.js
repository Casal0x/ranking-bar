import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeUser,
  testLoadUsers,
} from '../../store/reducers/exampleApiReducer';

const ExampleAboutView = () => {
  const { users, loading } = useSelector((state) => state.exampleApi);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('users');
    if (!users.length) {
      console.log(users);
      dispatch(testLoadUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <h2>Example About View</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {users.length > 0 &&
            users.map((user) => (
              <li>
                <span style={{ marginRight: '2rem' }}>{user.name}</span>
                <button onClick={() => deleteUser(user.id)}> X </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ExampleAboutView;
