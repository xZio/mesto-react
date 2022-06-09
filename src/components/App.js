import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { ESC_CODE } from "../utils/utils.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEcsClose(evt) {
    if (evt.key === ESC_CODE) {
      closeAllPopups();
    }
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    document.addEventListener("keydown", handleEcsClose);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    document.addEventListener("keydown", handleEcsClose);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    document.addEventListener("keydown", handleEcsClose);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    document.addEventListener("keydown", handleEcsClose);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    document.removeEventListener("keydown", handleEcsClose);
  }

  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name={"profile"}
          title={"Редактировать профиль"}
          buttonText={"Сохранить"}
          isOpened={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onOverlay={handleOverlayClick}
        >
          <input
            id="profile-name"
            type="text"
            minLength="2"
            maxLength="40"
            placeholder="Имя"
            className="popup__input"
            name="profile-name"
            required
          />
          <span className="popup__error" id="profile-name-error">
            3
          </span>
          <input
            id="profile-job"
            type="text"
            minLength="2"
            maxLength="200"
            placeholder="Профессия"
            className="popup__input"
            name="profile-job"
            required
          />
          <span className="popup__error" id="profile-job-error">
            4
          </span>
        </PopupWithForm>

        <PopupWithForm
          name={"card"}
          title={"Новое место"}
          buttonText={"Создать"}
          isOpened={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onOverlay={handleOverlayClick}
        >
          <input
            id="card-title"
            type="text"
            minLength="2"
            maxLength="30"
            placeholder="Название"
            className="popup__input"
            name="card-place"
            required
          />
          <span className="popup__error" id="card-place-error">
            1
          </span>
          <input
            id="card-src"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input"
            name="card-src"
            required
          />
          <span className="popup__error" id="card-src-error">
            2
          </span>
        </PopupWithForm>
        <PopupWithForm
          name={"avatar"}
          title={"Обновить аватар"}
          buttonText={"Сохранить"}
          isOpened={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onOverlay={handleOverlayClick}
        >
          <input
            id="avatar-url"
            type="url"
            placeholder="Ссылка на аватар"
            className="popup__input"
            name="avatar-url"
            required
          />
          <span
            className="popup__error popup__error_type_avatar"
            id="avatar-url-error"
          >
            2
          </span>
        </PopupWithForm>

        <PopupWithForm
          name={"confirm"}
          title={"Вы уверены?"}
          buttonText={"Да"}
          onOverlay={handleOverlayClick}
          onClose={closeAllPopups}
        ></PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          onOverlay={handleOverlayClick}
        ></ImagePopup>
      </div>
    </div>
  );
}

export default App;
