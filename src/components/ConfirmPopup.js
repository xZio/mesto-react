import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({ isOpen, onClose, onOverlay, onConfirm, isLoading }) {
  const isValid = true;

  function handleSubmit(e) {
    e.preventDefault();

    onConfirm();
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      buttonText="Да"
      onOverlay={onOverlay}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={isValid}
    ></PopupWithForm>
  );
}

export default ConfirmPopup;
