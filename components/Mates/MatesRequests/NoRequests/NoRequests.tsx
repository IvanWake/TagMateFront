import Image from "next/image";
import styles from "./NoRequests.module.css";
import Link from "next/link";

type NoRequestsProps = {
  image: string;
  title: string;
  description: string;
};

const NoRequests = ({ image, title, description }: NoRequestsProps) => (
  <div className={styles.noRequests}>
    <Image src={image} alt={title} />
    <div className={styles.noRequestsTitle}>{title}</div>
    <div className={styles.noRequestsText}>{description}</div>
    <Link href="/" className={styles.noRequestsButton} aria-label="Профиль">Открыть профиль</Link>
  </div>
);

export default NoRequests;