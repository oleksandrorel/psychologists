const ADD = 'disfavourites/ADD';
const REMOVE = 'disfavourites/REMOVE';

export const actions = {
  add: (psychologist) => ({ type: ADD, psychologist }),
  remove: (psychologist) => ({ type: REMOVE, psychologist }),
};

export const disfavouritesReducer = (psychologists = [], action) => {
  switch (action.type) {
    case ADD:
      return [...psychologists, { ...action.psychologist }];

    case REMOVE:
      return psychologists.filter((psychologist) => psychologist.name !== action.psychologist.name);

    default:
      return psychologists;
  }
};
