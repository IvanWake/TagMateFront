import styles from "./NoMatesSearch.module.css";
import searchMatesImg from "../../../../public/purposesImg/search_mates-img.svg";
import Image from "next/image";

const NoMatesSearch = () => (
  <div className={styles.noMatesSearch}>
    <Image className={styles.noMatesSearchImg} src={searchMatesImg} alt="Никого не найдено"  />
    <div className={styles.noMatesSearchTitle}>Никого не нашлось</div>
    <div className={styles.noMatesSearchText}>Перепроверь данные, возможно, где-то ошибка</div>
  </div>
);

export default NoMatesSearch;