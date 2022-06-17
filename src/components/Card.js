import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card && card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `button ${
    isOwn ? "button_type_del" : " button_type_del button_type_del_hidden"
  }`;
  const isLiked = card.likes.some((author) => currentUser._id === author._id);
  const cardLikeButtonClassName = `button button_type_like places__like-button ${
    isLiked ? "button_type_like_active" : ""
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img
        src={card.link}
        onClick={handleClick}
        alt={card.name}
        className="card__image"
      />
      <div className="card__content">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like-place">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="card__likes">{card.likes.length}</span>
        </div>
        <button
          className={cardDeleteButtonClassName}
          onClick={handleCardDelete}
        ></button>
      </div>
    </li>
  );
}
export default Card;
