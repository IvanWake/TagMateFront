const TabBar = () => {
    return (
        <footer className="app-footer">
            <div className="nav-item">
                <svg width="24" height="24" className="nav-icon">
                    <use href="#icon-feed"></use>
                </svg>
                <div className="nav-label">Лента</div>
            </div>
            <div className="nav-item">
                <svg width="24" height="24" className="nav-icon">
                    <use href="#icon-mates"></use>
                </svg>
                <div className="nav-label">Мейты</div>
            </div>
            <div className="nav-item">
                <svg width="24" height="24" className="nav-icon">
                    <use href="#icon-settings"></use>
                </svg>
                <div className="nav-label">Настройки</div>
            </div>
            <div className="nav-item active">
                <svg width="24" height="24" className="nav-icon">
                    <use href="#icon-profile"></use>
                </svg>
                <div className="nav-label">Профиль</div>
            </div>
        </footer>
    );
}

export default TabBar;
