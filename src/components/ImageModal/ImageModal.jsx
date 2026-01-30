import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export const ImageModal = ({ modelIsOpen, closeModal, modal }) => {
  if (!modal) return null;
  const { urls, alt_description, likes, user, description } = modal;

  return (
    <Modal
      isOpen={modelIsOpen}
      onRequestClose={closeModal}
      className={css.modalContent}
      overlayClassName={css.overlay}
    >
      <button className={css.closeButton} onClick={closeModal}>×</button>
      <div className={css.imageWrapper}>
        <img
          className={css.image}
          src={urls?.regular}
          alt={alt_description ?? "Image"}
        />
      </div>
      <div className={css.info}>
        <h3>{user?.name}</h3>
        {description && <p>{description}</p>}
        <p>Likes: {likes}</p>
      </div>
    </Modal>
  );
};