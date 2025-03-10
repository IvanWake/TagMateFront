import mainStyles from "./Mates.module.css";

const MatesList = () => {
    return (
        <div className={mainStyles.matesList}>
            <div className={mainStyles.userItem}>
                <img src="" alt="" className={mainStyles.userPicture} />
                <div className={mainStyles.userInfo}>
                    <div className={mainStyles.userName}>Сергей Андрианов</div>
                    <div className={mainStyles.userDescription}>19, Москва</div>
                </div>
            </div>
        </div>
    );
};

export default MatesList;