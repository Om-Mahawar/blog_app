import { v4 as uuid } from 'uuid';

export const addBlog = (newBlog) => ({
  type: 'CREATE_BLOG',
  blog: {
    id: uuid(),
    ...newBlog,
  },
});

export const editBlog = (id, updates) => ({
  type: 'EDIT_BLOG',
  id,
  updates,
});

export const deleteBlog = (id) => ({
  type: 'DELETE_BLOG',
  id,
});
