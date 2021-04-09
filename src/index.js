import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import { addBlog } from './actions/blog';
import store from './Store/store';
import moment from 'moment';
import visibleBlog from './selectors/visibleBlog';

store.dispatch(
  addBlog({
    title: 'First',
    content: 'body1',
    createdAt: moment('2000/10/12').format('YYYY MM DD'),
  })
);
store.dispatch(
  addBlog({
    title: 'Second',
    content: 'body2',
    createdAt: moment('2001/10/12').format('YYYY MM DD'),
  })
);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
// console.log(store.getState());

// const newStore = store.getState();
// visibleBlog(newStore.blogs, newStore.filters);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

ReactDOM.render(<App />, document.getElementById('root'));
