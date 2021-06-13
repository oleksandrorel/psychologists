import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as disfavouriteActions } from '../../store/disfavourites';
import { actions as favouriteActions } from '../../store/favourites';
import './PsychologistCard.scss';
import { getFavouritePsychologists, getDisfavouritePsychologists } from '../../store';

export const PsychologistCard = ({ psychologist }) => {
  const dispatch = useDispatch();
  const disfavouritePsychologists = useSelector(getDisfavouritePsychologists);
  const addedToDisfavoutite = disfavouritePsychologists.some(good => good.name === psychologist.name);
  const favouritePsychologists = useSelector(getFavouritePsychologists);
  const addedToFavorite = favouritePsychologists.some(good => good.name === psychologist.name);

  const addToDisfavourite = () => {
    dispatch(disfavouriteActions.add(psychologist));
    removeFromFavorite();
  };

  const removeFromDisfavourite = () => {
    dispatch(disfavouriteActions.remove(psychologist));
  };

  const addToFavorite = () => {
    dispatch(favouriteActions.add(psychologist));
    removeFromDisfavourite()
  };

  const removeFromFavorite = () => {
    dispatch(favouriteActions.remove(psychologist));
  };

  return (
    <div className="PsychologistCard-Wrapper">
      <div className="PsychologistCard">

        <h2 className="PsychologistCard-Title">
          {psychologist.name}
        </h2>

        <div className="Info PsychologistCard-Info">
          <div className="Info-Block">
            <div className="Info-Name">
              Email
            </div>
            <div className="Info-Value">
              {psychologist.email}
            </div>
          </div>

          <div className="Info-Block">
            <div className="Info-Name">
              Psychologist type
            </div>
            <div className="Info-Value">
              {psychologist.type}
            </div>
          </div>

        </div>

        <div className="Actions">

          <button
            type="button"
            className="Actions-FavouriteButton"
            onClick={addedToFavorite
              ? removeFromFavorite
              : addToFavorite}
          >
            <img
              className="Actions-Icons"
              src={addedToFavorite
                ? 'img/favourite-active.png'
                : 'img/favourite.svg'}
              alt="favourite"
            />
          </button>

          <button
            type="button"
            className="Actions-FavouriteButton"
            onClick={addedToDisfavoutite
              ? removeFromDisfavourite
              : addToDisfavourite}
          >
            <img
              className="Actions-Icons"
              src={addedToDisfavoutite
                ? 'img/disfavourite-active.svg'
                : 'img/disfavourite.svg'}
              alt="disfavourite"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
