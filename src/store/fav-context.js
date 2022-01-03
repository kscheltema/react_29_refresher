import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemsIsFavorite: (meetupId) => {},
});

export function FavContextProvider(props) {
  const [userFav, setUserFav] = useState([]);

  function addFavHandler(favoriteMeetup) {
    setUserFav((prevUserFav) => {
      return prevUserFav.concat(favoriteMeetup);
    });
  }

  function removeFavHandler(meetupId) {
    setUserFav((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemsFavHandler(meetupId) {
    return userFav.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFav,
    totalFavorites: userFav.length,
    addFavorite: addFavHandler,
    removeFavorite: removeFavHandler,
    itemsIsFavorite: itemsFavHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
