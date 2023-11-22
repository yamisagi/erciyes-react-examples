import React from 'react';

const UserTable = ({ state }) => {
  return (
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
  );
};

export default UserTable;
