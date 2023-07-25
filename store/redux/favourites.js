const {createSlice} = require('@reduxjs/toolkit');

const favouritesSlice = createSlice({
  name: 'Favourites',
  initialState: {ids: []},
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

// export const {addFavourite, removeFavourite} = favouritesSlice.actions;
export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;
export default favouritesSlice.reducer;
