import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageList.module.css";

export const ImageList = ({ images, openModal }) => {
    return (
        <ul className={css.list}>
            {images.map((image) => (
                <li key={image.id} className={css.item}>
                    <ImageCard image={image} openModal={openModal} />
                </li>
            ))}
        </ul>
    )
}
