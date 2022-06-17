import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpen,
  onClose,
  onOverlay,
  onUpdateAvatar,
  isLoading,
}) {
  const [avatarInput, setAvatarInput] = React.useState("");
  const [linkError, setLinkError] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  function handleAvatarLinkChange(e) {
    setAvatarInput(e.target.value)
    setLinkError(e.target.validationMessage);
    setIsValid(e.target.form.checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarInput,
    });
  }

  React.useEffect(() => {
    setLinkError("");
    setIsValid(false);
    setAvatarInput("");
  }, [isOpen]);

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
        value={avatarInput}
        id="avatar-url"
        type="url"
        placeholder="Ссылка на аватар"
        className="popup__input"
        name="avatar-url"
        onChange={handleAvatarLinkChange}
        required
      />
      <span
        className="popup__error popup__error_type_avatar"
        id="avatar-url-error"
      >
        {linkError}
      </span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
