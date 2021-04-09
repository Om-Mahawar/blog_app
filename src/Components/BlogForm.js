import React, { useState } from 'react';
import moment from 'moment';

const BlogForm = (props) => {
  const [blog, setBlog] = useState({
    title: props.blog ? props.blog[0].title : '',
    content: props.blog ? props.blog[0].content : '',
  });
  const [error, setError] = useState('');
  const onTitleChange = (e) => {
    const title = e.target.value;
    setBlog({
      ...blog,
      title,
    });
  };

  const onContentChange = (e) => {
    const content = e.target.value;
    setBlog({
      ...blog,
      content,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!blog.title || !blog.content) {
      setError('Please enter title and content');
      console.log('Error set!!');
    } else {
      setError('');
      // const currentDate = new Date();
      // const currentTime = currentDate.getTime();
      props.onSubmit({
        title: blog.title,
        content: blog.content,
        createdAt: moment().valueOf(),
      });
    }
  };

  return (
    <div>
      {error ? <p>{error}</p> : ''}
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Title of blog'
          onChange={onTitleChange}
          value={blog.title}
        />
        <textarea
          placeholder='Blog Content'
          onChange={onContentChange}
          value={blog.content}
        ></textarea>
        <button>Save Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
