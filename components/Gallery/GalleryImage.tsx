'use client';

type Props = {
    src: string
}

const GalleryImage = ({ src }: Props) => {
    return (
        <div className="image-item">
            <img src={src} alt={src} />
        </div>
    );
}

export default GalleryImage;