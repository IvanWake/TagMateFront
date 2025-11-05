'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './TabBar.module.css';
import TabMatesIcon from './TabBarSvgIcons/TabMatesIcon';
import TabProfileIcon from './TabBarSvgIcons/TabProfileIcon';

const TabBar = () => {
    const pathname = usePathname();

    const isMatesActive = pathname.startsWith("/mates") ||
        (
            pathname.split("/").length > 1
            && pathname !== "/"
        );
    const isProfileActive = pathname === '/';

    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div  onClick={() => window.location.replace("/mates")} className={isMatesActive ? styles.iconActive : styles.icon}>
                    <TabMatesIcon color={isMatesActive ? '#000000' : '#A29FA8'} width={24} height={24} />
                </div>

                <div onClick={() => window.location.replace("/")} className={isProfileActive ? styles.iconActive : styles.icon}>
                    <TabProfileIcon color={isProfileActive ? '#000000' : '#A29FA8'} width={24} height={24} />
                </div>
            </div>
        </footer>
    );
};

export default TabBar;