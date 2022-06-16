function PopupWithForm({
  name,
  title,
  buttonText,
  children,
  isOpen,
  onClose,
  onOverlay,
  onSubmit,
  isLoading,
  isValid,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen && "popup_opened"} `}
      onMouseDown={onOverlay}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        <button className="button button_type_esc" onClick={onClose}></button>
        <h2 className="popup__header">{title}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          name={`${name}-form`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            disabled={!isValid}
            type="submit"
            className={
              isValid
                ? "button button_type_save popup__save-button"
                : "button button_type_save popup__save-button button_type_save_disabled"
            }
          >
            {isLoading ? "Сохранение..." : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
