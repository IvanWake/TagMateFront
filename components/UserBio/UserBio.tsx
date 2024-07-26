'use client';

type Props = {
    gender: string,
    birthDay: string,
    city: string
}

const UserBio = ({ gender, birthDay, city }: Props) => {
    const males = { "male": "Мужской", "female": "Женский" };

    return (
        <div className="description-wrapper">
            <div className="desc-element">
                <div className="desc-name">Пол</div>
                <div className="desc-info">{males[gender]}</div>
            </div>
            <div className="desc-element">
                <div className="desc-name">Возраст</div>
                <div className="desc-info">{birthDay}</div>
            </div>
            <div className="desc-element">
                <div className="desc-name">Город</div>
                <div className="desc-info">{city}</div>
            </div>
        </div>
    );
}

export default UserBio;