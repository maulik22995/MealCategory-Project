const {createContext, useState} = require('react');

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: id => {},
  removeFavourite: id => {},
});

function FavouriteContextPerovider({children}) {
  const [favouritesIds, setFavouritesIds] = useState([]);

  function addFavourite(id) {
    setFavouritesIds(currentIds => [...currentIds, id]);
  }

  function removeFavourite(id) {
    setFavouritesIds(currentIds => currentIds.filter(mealId => mealId !== id));
  }

  const value = {
    ids: favouritesIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextPerovider;
