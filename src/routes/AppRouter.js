import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../Components/LoginPage';
import DashboardPage from '../Components/DashboardPage';
import AddBlogPage from '../Components/AddBlogPage';
import EditBlog from '../Components/EditBlog';
import Header from '../Components/Header';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/create' component={AddBlogPage} />
        <Route path='/edit/:id' component={EditBlog} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
