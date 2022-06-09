function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div id="card">
      <li className="card">
        <img
          src={card.link}
          onClick={handleClick}
          alt=""
          className="card__image"
        />
        <div className="card__content">
          <h2 className="card__name">{card.name} </h2>
          <div className="card__like-place">
            <button className="button button_type_like places__like-button"></button>
            <span className="card__likes">{card.likes.length}</span>
          </div>
          <button className="button button_type_del"></button>
        </div>
      </li>
    </div>
  );
}
export default Card;
