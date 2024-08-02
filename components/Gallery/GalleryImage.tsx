'use client';

import styles from "./Gallery.module.css";

type Props = {
    src: string
}

const GalleryImage = ({ src }: Props) => {
    return (
        <div className={styles["image-item"]}>
            <img src={src} alt={src} />
        </div>
    );
}

export default GalleryImage;