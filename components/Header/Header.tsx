'use client';

import { copyTextToClipboard } from "@/service/layout";
import styles from "./Header.module.css";

type Props = { tag: string }

const Header = ({ tag }: Props) => {

    return (
        <header className={styles.header}>
            <div className={styles["header-content"]}>
                <div className={styles["tag-div"]} onClick={() => { copyTextToClipboard(tag) }}>
                    <img src="icons/tagmate-min.svg" width="32px" />
                    <div className={styles.tag}>#{tag}</div>
                </div>
                <div>
                    <div className={styles.button} id="search">
                        <img src="/icons/search.svg" alt="search" width="24px"/>
                    </div>
                    <div className={styles.button} id="profile">
                        <img src="/icons/profile.svg" alt="profile" width="24px"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;