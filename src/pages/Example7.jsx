import React, { useEffect, useReducer } from 'react';
import { getUsers, getPosts } from '../service/userPostsService';
import { userReducer, initialState } from '../reducer/userReducer';
import UserTable from '../components/UserTable';
import SelectUser from '../components/SelectUser';
import Loading from '../components/Loading';

const Example7 = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    console.log('useEffect'); // Tek bir sefer fetch işlemi yaptığımız için daha az maaliyetli :)
    const fetchData = async () => {
      const users = await getUsers();
      const posts = await getPosts();
      dispatch({ type: 'SET_USERS', payload: users });
      dispatch({ type: 'SET_POSTS', payload: posts });
    };

    fetchData();
  }, []);

  if (state.loading) {
    return <Loading />;
  }

  return (
    <div className='flex-container'>
      <h1>Posts</h1>
      <button
        className='btn'
        onClick={() => {
          dispatch({ type: 'SET_IS_FILTERED', payload: false });
          dispatch({ type: 'SET_SELECTED_USER', payload: '' });
        }}
      >
        Reset
      </button>
      <SelectUser state={state} dispatch={dispatch} />

      <UserTable state={state} />
    </div>
  );
};

export default Example7;
