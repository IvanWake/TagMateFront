'use client';

import GalleryImage from "@/components/Gallery/GalleryImage";
import styles from "./Gallery.module.css";

const Gallery = () => {
    return (
        <>
            <p className="title">Галерея</p>
            <div className={styles["image-gallery"]}>
                {
                    gallery.map((image, index) => (
                        <div key={"imgId " + index}>
                            <GalleryImage src={image} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Gallery;