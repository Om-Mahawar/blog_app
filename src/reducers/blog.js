const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      return [...state, action.blog];
    case 'EDIT_BLOG':
      return state.map((blog) => {
        if (blog.id === action.id) {
          return { ...blog, ...action.updates };
        } else {
          return blog;
        }
      });
    case 'DELETE_BLOG':
      return state.filter((blog) => blog.id !== action.id);
    case 'FETCH_ALL':
      return state;
    default:
      return state;
  }
};

export default blogReducer;
