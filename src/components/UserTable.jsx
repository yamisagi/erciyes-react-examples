import React from 'react';

const UserTable = ({ state }) => {
  const { users } = state;

  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        {!state.isFiltered && (
          <tbody>
            {state.posts.map((post) => (
              <tr key={post.id}>
                <td>
                  {users.filter((user) => user.id === post.userId)[0].name}
                </td>
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
                <td>
                  {users.filter((user) => user.id === post.userId)[0].name}
                </td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default UserTable;
