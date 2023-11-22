export const initialState = {
  users: [],
  loading: true,
  posts: [],
  isFiltered: false,
  filteredPosts: [],
  selectedUser: '',
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload, loading: false };
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'SET_IS_FILTERED':
      return { ...state, isFiltered: action.payload };
    case 'SET_FILTERED_POSTS':
      return { ...state, filteredPosts: action.payload };
    case 'SET_SELECTED_USER':
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};
