const POST_API = 'https://jsonplaceholder.typicode.com/posts';
const USER_API = 'https://jsonplaceholder.typicode.com/users';

export const getPosts = async () => {
  try {
    const response = await fetch(POST_API);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(USER_API);
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};
