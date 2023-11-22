import React, { useState, useEffect } from 'react';
import { getUsers, getPosts } from '../service/userPostsService';

const Example7 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchUsers = async () => {
    const users = await getUsers();
    setUsers(users);
    setLoading(false);
  };
  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
  };
  useEffect(() => {
    console.log('useEffect'); // Tek bir sefer fetch işlemi yaptığımız için daha az maaliyetli :)
    fetchUsers();
    fetchPosts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  const handleUserChange = (e) => {
    const userId = e.target.value;
    if (userId) {
      setIsFiltered(true);
      setFilteredPosts(posts.filter((post) => post.userId == userId));
    } else {
      setIsFiltered(false);
    }
  };
  return (
    <div className='flex-container'>
      <h1>Posts</h1>
      <button
        className='btn'
        onClick={() => {
          setIsFiltered(false);
        }}
      >
        Reset
      </button>
      <select onChange={handleUserChange}>
        <option value=''>Select User</option>
        {users.map((user) => (
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

          {!isFiltered && (
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          )}
          {isFiltered && (
            <tbody>
              {filteredPosts.map((post) => (
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
