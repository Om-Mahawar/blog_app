import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBlog, deleteBlog } from '../actions/blog';
import BlogForm from './BlogForm';

const EditBlog = (props) => {
  const dispatch = useDispatch();

  const onSubmit = (blog) => {
    dispatch(editBlog(props.match.params.id, blog));
    props.history.push('/dashboard');
  };

  const blogToBeEditted = useSelector((state) =>
    state.blogs.filter((blog) => blog.id === props.match.params.id)
  );

  const removeBlog = () => {
    dispatch(deleteBlog(props.match.params.id));
    props.history.push('/dashboard');
  };
  // console.log(props);
  return (
    <div>
      <h1>Edit Expense</h1>
      <BlogForm onSubmit={onSubmit} blog={blogToBeEditted} />
      <button onClick={removeBlog}> Delete Blog</button>
    </div>
  );
};

export default EditBlog;
