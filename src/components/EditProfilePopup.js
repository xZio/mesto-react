import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function EditProfilePopup({
  isOpen,
  onClose,
  onOverlay,
  onUpdateUser,
  isLoading,
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormAndValidation();

  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: values.name || "",
      about: values.about || "",
    });
  }

  React.useEffect(() => {
    resetForm();
    setIsValid(true);
    currentUser &&
      setValues({ name: currentUser.name, about: currentUser.about });
  }, [isOpen, resetForm, currentUser, setIsValid, setValues]);

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
        value={values.name || ""}
        id="profile-name"
        type="text"
        minLength="2"
        maxLength="40"
        placeholder="Имя"
        className="popup__input"
        name="name"
        onChange={handleChange}
        required
      />
      <span className="popup__error" id="profile-name-error">
        {errors.name}
      </span>
      <input
        value={values.about || ""}
        id="profile-job"
        type="text"
        minLength="2"
        maxLength="200"
        placeholder="Профессия"
        className="popup__input"
        name="about"
        onChange={handleChange}
        required
      />
      <span className="popup__error" id="profile-job-error">
        {errors.about}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
