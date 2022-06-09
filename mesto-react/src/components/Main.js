import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([data, cards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-place">
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          <button
            className="button button_type_save button_type_avatar"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div>
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__profession">{userDescription}</p>
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
              <Card card={card} onCardClick={onCardClick} key={card._id} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
