export const urls = (state = [], action) => {
  switch (action.type) {
    case 'SET_URLS':
      return [...action.url]
    default:
      return state;
  }
};
