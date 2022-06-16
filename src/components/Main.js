import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-place">
          {currentUser && (
            <img
              src={currentUser.avatar}
              alt="Аватар"
              className="profile__avatar"
            />
          )}
          <button
            className="button button_type_save button_type_avatar"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div>
            <h1 className="profile__name">{currentUser && currentUser.name}</h1>
            <p className="profile__profession">
              {currentUser && currentUser.about}
            </p>
          </div>
          <button
            className="button button_type_edit profile__edit-button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="button button_type_add profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="places">
        <ul className="places__card-list">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
                key={card._id}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
