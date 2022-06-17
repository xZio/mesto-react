import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function AddPlacePopup({ isOpen, onClose, onOverlay, onAddPlace, isLoading }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: values.name || "",
      link: values.link || "",
    });
  }

  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

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
        value={values.name || ""}
        id="card-title"
        type="text"
        minLength="2"
        maxLength="30"
        placeholder="Название"
        className="popup__input"
        name="name"
        onChange={handleChange}
        required
      />
      <span className="popup__error" id="name-error">
        {errors.name || ""}
      </span>
      <input
        value={values.link || ""}
        id="card-src"
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input"
        name="link"
        onChange={handleChange}
        required
      />
      <span className="popup__error" id="card-src-error">
        {errors.link || ""}
      </span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
