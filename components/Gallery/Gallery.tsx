import { Image } from "@/types/userProfile/profileContent";
import galleryStyles from "./Gallery.module.css";

const Gallery = ({ images }: Image[]) => {
    return (
        <div className={galleryStyles["user-gallery"]}>
            <div className={galleryStyles["section-title"]}>Галерея</div>
            <div className={galleryStyles["gallery-wrapper"]}>
                <div className={galleryStyles["gallery-container"]}>
                    {
                        images.map((image) => (
                            <div key={image.id} id={image.id} className={galleryStyles["gallery-item"]}>
                                <img src={image.path} alt={image.id} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Gallery;