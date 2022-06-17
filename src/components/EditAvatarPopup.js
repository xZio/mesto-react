import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function EditAvatarPopup({
  isOpen,
  onClose,
  onOverlay,
  onUpdateAvatar,
  isLoading,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: values.url,
    });
  }

  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <input
        value={values.url || ""}
        id="avatar-url"
        type="url"
        placeholder="Ссылка на аватар"
        className="popup__input"
        name="url"
        onChange={handleChange}
        required
      />
      <span
        className="popup__error popup__error_type_avatar"
        id="avatar-url-error"
      >
        {errors.url}
      </span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
