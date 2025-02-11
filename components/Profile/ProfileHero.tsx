import profileHero from "./Profile.module.css";
const ProfileHero = () => {
    return (
        <section className={profileHero["profile-hero"]} id="profile">
            <img src="/Serega.jpg" alt="profile image" className={profileHero["profile-image"]} />
                <div className={profileHero["profile-info"]}>
                    <div className={profileHero["user-location"]}>Москва</div>
                    <div className={profileHero["user-name"]}>Сергей Андрианов, 19</div>
                    {/*<div className="user-status">*/}
                    {/*    <div className="status-indicator"></div>*/}
                    {/*    <span>В сети</span>*/}
                    {/*</div>*/}
                </div>
        </section>
    );
}

export default ProfileHero;
