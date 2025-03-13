import mainStyles from "./Search.module.css";

const Search = () => {
    return (
        <>
            <section className={mainStyles.searchInput}>
                <div className={mainStyles.searchInputWrapper}>
                    <svg width="20" height="20">
                        <use href="#icon-search"></use>
                    </svg>
                    <input type="search" placeholder="Поиск" />
                </div>
            </section>

            <svg style={{ display: "none" }}>
                <symbol id="icon-search" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20.7053 19.282L16.4678 15.0433C17.4291 13.7825 18 12.2079 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.2081 18 13.7829 17.429 15.0438 16.4674L19.2815 20.7062C19.6739 21.0987 20.3104 21.0977 20.7036 20.7044C21.0995 20.3084 21.0975 19.6743 20.7053 19.282ZM16 10.5C16 13.5376 13.5376 16 10.5 16C7.46243 16 5 13.5376 5 10.5C5 7.46243 7.46243 5 10.5 5C13.5376 5 16 7.46243 16 10.5Z"
                        fill="currentColor" />
                </symbol>
            </svg>
        </>
    );
};

export default Search;