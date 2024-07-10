'use client';

const UserBio = () => {
    return (
        <div className="description-wrapper">
            <div className="desc-element">
                <div className="desc-name">Пол</div>
                <div className="desc-info">{"Мужской"}</div>
            </div>
            <div className="desc-element">
                <div className="desc-name">Возраст</div>
                <div className="desc-info">{"15.09.2005 (18 лет)"}</div>
            </div>
            <div className="desc-element">
                <div className="desc-name">Город</div>
                <div className="desc-info">{"Москва"}</div>
            </div>
        </div>
    );
}

export default UserBio;