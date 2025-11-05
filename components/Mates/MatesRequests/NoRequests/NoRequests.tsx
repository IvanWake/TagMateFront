'use client';
import styles from "./NoRequests.module.css";
import Link from "next/link";
import Image from "next/image";

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
    <div onClick={() => window.location.replace("/")} className={styles.noRequestsButton} aria-label="Профиль">Открыть профиль</div>
  </div>
);

export default NoRequests;