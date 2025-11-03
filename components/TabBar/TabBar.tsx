import styles from './TabBar.module.css';
import TabMatesIcon from './TabBarSvgIcons/TabMatesIcon';
import TabProfileIcon from './TabBarSvgIcons/TabProfileIcon';

const TabBar = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.icon}>
                    <TabMatesIcon color="#A29FA8" width={24} height={24} />
                </div>
                <div className={styles.iconActive}>
                    <TabProfileIcon color="#A29FA8" width={24} height={24} />
                </div>
            </div>
        </footer>
    );
}

export default TabBar;
