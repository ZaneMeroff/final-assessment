export const urls = (state = [], action) => {
  switch (action.type) {
    case 'SET_URLS':
      return action.url
    case 'ADD_URLS':
      return [...state, action.url]
    default:
      return state;
  }
};
