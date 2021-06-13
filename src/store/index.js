import { createStore, combineReducers } from 'redux';
import { disfavouritesReducer } from './disfavourites';
import { favouritesReducer } from './favourites';

const rootReducer = combineReducers({
  disfavourites: disfavouritesReducer,
  favourites: favouritesReducer,
});

export const getDisfavouritePsychologists = (state) => state.disfavourites;
export const getFavouritePsychologists = (state) => state.favourites;

const store = createStore(rootReducer);

export default store;
