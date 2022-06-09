function PopupWithImage({ card, onClose, onOverlay }) {
  return (
    <div className={`popup popup_type_image ${card && "popup_opened"}`} onMouseDown={onOverlay}>
      <div className="popup__container popup__image-container">
        <button className="button button_type_esc" onClick={onClose}></button>
        <img className="popup__image" src={card &&card.link} alt={card && card.name} />
        <h2 className="popup__image-title">{card && card.name} </h2>
      </div>
    </div>
  );
}
export default PopupWithImage;
