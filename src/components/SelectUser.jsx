import React from 'react';

const SelectUser = ({ state, dispatch }) => {
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
    <select value={state.selectedUser} onChange={handleUserChange}>
      <option value={''}>Select User</option>
      {state.users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default SelectUser;
