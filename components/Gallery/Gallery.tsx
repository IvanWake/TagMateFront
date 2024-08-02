'use client';

import GalleryImage from "@/components/Gallery/GalleryImage";
import styles from "./Gallery.module.css";

const Gallery = () => {

    const gallery = [
        "https://i.pinimg.com/736x/7a/e3/4f/7ae34f334643046d2f29332078220e99.jpg",
        "https://i.pinimg.com/564x/52/8b/39/528b39990bb2550338b9332687c5df96.jpg",
        "https://i.pinimg.com/564x/6b/bd/2d/6bbd2d2ee8c55fba91c14339535458fe.jpg",
        "https://i.pinimg.com/564x/b3/bf/f6/b3bff635022266b7a3289e18e89ca23c.jpg",
        "https://i.pinimg.com/736x/2b/c3/cb/2bc3cbc431b76afe464e5e833c64663d.jpg"
    ]

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