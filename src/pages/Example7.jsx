import React, { useEffect, useReducer } from 'react';
import { getUsers, getPosts } from '../service/userPostsService';
import { userReducer, initialState } from '../reducer/userReducer';

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
    return (
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        Loading...
      </h1>
    );
  }

  const handleUserChange = (e) => {
    const userId = e.target.value;
    dispatch({ type: 'SET_SELECTED_USER', payload: userId });
    if (userId) {
      dispatch({ type: 'SET_IS_FILTERED', payload: true });
      dispatch({
        type: 'SET_FILTERED_POSTS',
        payload: state.posts.filter((post) => post.userId == userId),
      });
    } else {
      dispatch({ type: 'SET_IS_FILTERED', payload: false });
    }
  };

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
      <select value={state.selectedUser} onChange={handleUserChange}>
        <option value={''}>Select User</option>
        {state.users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          {!state.isFiltered && (
            <tbody>
              {state.posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          )}
          {state.isFiltered && (
            <tbody>
              {state.filteredPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Example7;
