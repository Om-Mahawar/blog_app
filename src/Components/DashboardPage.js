import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './BlogList';
import BlogFilter from './BlogFilters';

const DashboardPage = () => (
  <div>
    <h3>Connecting People..</h3>
    <Link to='/create'>New Blog</Link>
    <BlogFilter />
    <BlogList />
  </div>
);

export default DashboardPage;
