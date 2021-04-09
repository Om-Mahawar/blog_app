import React from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../actions/blog';
import BlogForm from './BlogForm.js';

const AddBlogPage = (props) => {
  const dispatch = useDispatch();

  const onSubmit = (blog) => {
    dispatch(addBlog(blog));
    props.history.push('/dashboard');
  };

  return (
    <div>
      <h1>Add Blog</h1>
      <BlogForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddBlogPage;
