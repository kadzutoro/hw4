import css from './ImageCard.module.css';

export const ImageCard = ({ image, openModal }) => {
    const { urls, alt_description, user, likes } = image;
    return (
        <div className={css.card}>
            <img
                className={css.image}
                onClick={() => openModal(image)}
                src={urls.small}
                alt={alt_description ?? 'Image'}
            />
            <div className={css.info}>
                <p className={css.user}>{user?.name}</p>
                <p className={css.likes}>Likes: {likes}</p>
            </div>
        </div>
    )
}