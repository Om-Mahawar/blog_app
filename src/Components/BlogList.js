import React from 'react';
import { useSelector } from 'react-redux';
import BlogListItem from './BlogListItem';
import visibleBlog from '../selectors/visibleBlog';

const BlogList = () => {
  const blogs = useSelector((state) => {
    console.log(state.filters);
    // console.log(visibleBlog(state.blogs,state.filters));
    return visibleBlog(state.blogs,state.filters);
  });
  // console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <BlogListItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
