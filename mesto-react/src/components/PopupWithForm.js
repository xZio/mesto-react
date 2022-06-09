function PopupWithForm({
  name,
  title,
  buttonText,
  children,
  isOpened,
  onClose,
  onOverlay
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpened && "popup_opened"} `} onMouseDown={onOverlay}>
      <div className={`popup__container popup__container_type_${name}`}>
        <button className="button button_type_esc" onClick={onClose}></button>
        <h2 className="popup__header">{title}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          name={`${name}-form`}
          noValidate
        >
          {children}
          <button
            type="submit"
            className="button button_type_save popup__save-button"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
