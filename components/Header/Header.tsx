import "./Header.css";

const Header = () => {

    return (
        <header>
            <div className="header-content">
                <div>
                    <img src="icons/tagmate-min.svg" width="32px"/>
                    <div className="tag">#AGJ5</div>
                </div>
                <div>
                    <div className="button" id="search">
                        <img src="/icons/search.svg" alt="search" width="24px"/>
                    </div>
                    <div className="button" id="profile">
                        <img src="/icons/profile.svg" alt="profile" width="24px"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;