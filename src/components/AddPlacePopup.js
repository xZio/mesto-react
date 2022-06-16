import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onOverlay, onAddPlace, isLoading }) {
  const [cardName, setCardName] = React.useState("");
  const [cardLink, setCardLink] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [linkError, setLinkError] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  function handleCardNameChange(e) {
    setCardName(e.target.value);
    setNameError(e.target.validationMessage);
    setIsValid(e.target.form.checkValidity());
  }

  function handleCardLinkChange(e) {
    setCardLink(e.target.value);
    setLinkError(e.target.validationMessage);
    setIsValid(e.target.form.checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  }

  React.useEffect(() => {
    setCardName("");
    setCardLink("");
    setLinkError("");
    setNameError("");
    setIsValid(false);
  }, [isOpen]);

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={isValid}
    >
      <input
        value={cardName || ""}
        id="card-title"
        type="text"
        minLength="2"
        maxLength="30"
        placeholder="Название"
        className="popup__input"
        name="card-place"
        onChange={handleCardNameChange}
        required
      />
      <span className="popup__error" id="card-place-error">
        {nameError}
      </span>
      <input
        value={cardLink || ""}
        id="card-src"
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input"
        name="card-src"
        onChange={handleCardLinkChange}
        required
      />
      <span className="popup__error" id="card-src-error">
        {linkError}
      </span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
