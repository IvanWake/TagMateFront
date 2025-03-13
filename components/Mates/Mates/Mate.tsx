import mainStyles from "./Mates.module.css";

const Mate = () => {
    // а этот комопнент принимает пропсы и подставляет их в div'ы
    return (
        <div className={mainStyles.userItem}>
            <img src="" alt="" className={mainStyles.userPicture} />
            <div className={mainStyles.userInfo}>
                <div className={mainStyles.userName}>Сергей Андрианов</div>
                <div className={mainStyles.userDescription}>19, Москва</div>
            </div>
        </div>
    );
}

export default Mate;