const defaultFilters = {
  text: '',
  time: 13,
};

const filtersReducer = (filters = defaultFilters, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...filters,
        text: action.text,
      };
    case 'SET_TIME_FILTER':
      return {
        ...filters,
        time: parseInt(action.time),
      };
    default:
      return filters;
  }
};

export default filtersReducer;
