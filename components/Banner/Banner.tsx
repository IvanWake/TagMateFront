import Link from "next/link";
import styles from "./Banner.module.css";
import { BannerData } from "@/types/userProfile/profileContent";

const Banner = ({
  link,
  image,
  title,
  description,
  buttonText,
}: BannerData) => {
  return (
    <div className={styles.banner}>
      <div className={styles.info}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <Link href={link}>
          <div className={styles.button}>{buttonText}</div>
        </Link>
      </div>
      <img src={image} className={styles.image} />
    </div>
  );
};

export default Banner;
