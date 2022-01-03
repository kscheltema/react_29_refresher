import { useContext } from "react";
import FavContextProvider from "../../store/fav-context";
import Card from "../../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favCtx = useContext(FavContextProvider);
  const itemsIsFavorite = favCtx.itemsIsFavorite(props.id);

  function toggleFavStatusHandler() {
    if (itemsIsFavorite) {
      favCtx.removeFavorite(props.id);
    } else {
      favCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>
            {itemsIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
