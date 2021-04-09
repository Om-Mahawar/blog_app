import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = (props) => {
  const { id, title, content } = props.blog;
  return (
    <div>
      <Link to={`edit/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{content}</p>
    </div>
  );
};

export default BlogListItem;
