import moment from 'moment';

const visibleBlog = (blogs, { text, time }) => {
  return blogs.filter((blog) => {
    let timeDiff = moment(1000);
    if(time<13){
      timeDiff = moment().subtract(time,'months');
    }
    const timeMatch = moment(blog.createdAt).isBetween(timeDiff,moment());
    const textMatch = blog.title.toLowerCase().includes(text.toLowerCase());
    console.log(timeMatch,textMatch);
    return timeMatch && textMatch;
  });
};

export default visibleBlog;
