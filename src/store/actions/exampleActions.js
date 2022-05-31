import { loadUsers } from '../reducers/exampleApiReducer';

export const exampleApiCall = async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    dispatch(loadUsers(users));
  } catch (error) {
    console.log(error);
    dispatch(loadUsers([]));
  }
};
