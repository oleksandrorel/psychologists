const ADD = 'favourites/ADD';
const REMOVE = 'favourites/REMOVE';

export const actions = {
  add: (psychologist) => ({ type: ADD, psychologist }),
  remove: (psychologist) => ({ type: REMOVE, psychologist }),
};

export const favouritesReducer = (psychologists = [], action) => {
  switch (action.type) {
    case ADD:
      return [...psychologists, { ...action.psychologist }];

    case REMOVE:
      return psychologists.filter((good) => good.name !== action.psychologist.name);

    default:
      return psychologists;
  }
};
