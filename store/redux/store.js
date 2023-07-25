import favouritesReducer from './favourites';

const {configureStore} = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    favouriteMeals: favouritesReducer,
  },
});
