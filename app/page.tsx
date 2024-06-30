import Header from "@/components/Header/Header";
import HeaderProfile from "@/components/Header/HeaderProfile";

const Page = () => {
    return (
        <>
            <Header />
            <HeaderProfile />
            <main>
                <div className="profile-info">
                    <div className="profile-name">Виталий Кличко</div>
                    <div className="profile-online">Был в сети час назад</div>
                </div>
                <div className="stats-wrapper">
                    <div className="stats-element">
                        <div className="stats-element-info">50%</div>
                        <div className="stats-element-name">Дружелюбие</div>
                    </div>
                    <div className="stats-element">
                        <div className="stats-element-info">25</div>
                        <div className="stats-element-name">Мейты</div>
                    </div>
                </div>

                <div className="description-wrapper">
                    <div className="desc-element">
                        <div className="desc-name">Пол</div>
                        <div className="desc-info">Мужской</div>
                    </div>
                    <div className="desc-element">
                        <div className="desc-name">Возраст</div>
                        <div className="desc-info">15.09.2005 (18 лет)</div>
                    </div>
                    <div className="desc-element">
                        <div className="desc-name">Город</div>
                        <div className="desc-info">Москва</div>
                    </div>
                </div>

                <p className="title">Интересы</p>
                <div className="interests-list">
                    <div className="interest-row">
                        <div className="interest-item">
                            Кулинария
                        </div>
                        <div className="interest-item">
                            Оригами
                        </div>
                        <div className="interest-item">
                            Аниме
                        </div>
                        <div className="interest-item">
                            Прогулки
                        </div>
                    </div>
                    <div className="interest-row">
                        <div className="interest-item">
                            Сериалы
                        </div>
                        <div className="interest-item">
                            Веб-дизайн
                        </div>
                        <div className="interest-item">
                            Кальян
                        </div>
                    </div>
                </div>

                <p className="title">Статус</p>
                <div className="status-wrapper">
                    В поиске <span>отношений</span>
                </div>

                <p className="title">Галерея</p>
                <div className="image-gallery">
                    <div className="image-item">
                        <img src="https://i.pinimg.com/736x/7a/e3/4f/7ae34f334643046d2f29332078220e99.jpg" />
                    </div>
                    <div className="image-item">
                        <img src="https://i.pinimg.com/564x/52/8b/39/528b39990bb2550338b9332687c5df96.jpg" />
                    </div>
                    <div className="image-item">
                        <img src="https://i.pinimg.com/564x/6b/bd/2d/6bbd2d2ee8c55fba91c14339535458fe.jpg" />
                    </div>
                    <div className="image-item">
                        <img src="https://i.pinimg.com/564x/b3/bf/f6/b3bff635022266b7a3289e18e89ca23c.jpg" />
                    </div>
                    <div className="image-item">
                        <img src="https://i.pinimg.com/736x/2b/c3/cb/2bc3cbc431b76afe464e5e833c64663d.jpg" />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Page;