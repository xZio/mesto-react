import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({
  isOpen,
  onClose,
  onOverlay,
  onUpdateUser,
  isLoading,
}) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  const [nameError, setNameError] = React.useState("");
  const [descriptionError, setDescriptionError] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
    setNameError(e.target.validationMessage);
    setIsValid(e.target.form.checkValidity());
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
    setDescriptionError(e.target.validationMessage);
    setIsValid(e.target.form.checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser && currentUser.name);
    setDescription(currentUser && currentUser.about);
    setNameError("");
    setDescriptionError("");
    setIsValid(true);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <input
        value={name || ""}
        id="profile-name"
        type="text"
        minLength="2"
        maxLength="40"
        placeholder="Имя"
        className="popup__input"
        name="profile-name"
        onChange={handleNameChange}
        required
      />
      <span className="popup__error" id="profile-name-error">
        {nameError}
      </span>
      <input
        value={description || ""}
        id="profile-job"
        type="text"
        minLength="2"
        maxLength="200"
        placeholder="Профессия"
        className="popup__input"
        name="profile-job"
        onChange={handleDescriptionChange}
        required
      />
      <span className="popup__error" id="profile-job-error">
        {descriptionError}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
