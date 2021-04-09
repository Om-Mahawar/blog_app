import React from 'react';
import { useDispatch } from 'react-redux';
import { setTextFilter, setTimeFilter } from '../actions/filters';

const BlogFilter = () => {
  const dispatch = useDispatch();

  const textChange = (e) => {
    const text = e.target.value;
    dispatch(setTextFilter(text));
  };

  const selectChange = (e) => {
    const timeOption = e.target.value;
    dispatch(setTimeFilter(timeOption));
    console.log(timeOption);
  };

  return (
    <div>
      Search by text:
      <input type='text' onChange={textChange} />
      <br />
      Search by date:
      <select onChange={selectChange} defaultValue='13'>
        <option value='3'>3 months</option>
        <option value='6'>6 months</option>
        <option value='12'>1 year</option>
        <option value='13'>all</option>
      </select>
    </div>
  );
};

export default BlogFilter;
