import userTagStyles from "./User.module.css";

const UserTag = ({ tag }: { tag: string }) => {
    return (
        <>
            <div className={userTagStyles["user-tag-wrapper"]}>
                <div className={userTagStyles["user-tag-container"]}>
                    <svg width="72" height="38" className={userTagStyles["tag-icon"]}>
                        <use href="#elem-tag"></use>
                    </svg>
                    <div className={userTagStyles["user-tag"]}>#{tag}</div>
                </div>
            </div>
            <svg style={{ display: "none" }}>
                <symbol id="elem-tag" viewBox="0 0 72 38" fill="none">
                    <path
                        d="M53.2801 34C61.1912 34 67.6044 27.2843 67.6044 19C67.6044 10.7157 61.1912 4 53.2801 4C45.369 4 38.9558 10.7157 38.9558 19C38.9558 27.2843 45.369 34 53.2801 34Z"
                        fill="white"/>
                    <path
                        d="M53.2801 36C62.3817 36 69.6044 28.301 69.6044 19C69.6044 9.699 62.3817 2 53.2801 2C44.1786 2 36.9558 9.699 36.9558 19C36.9558 28.301 44.1786 36 53.2801 36Z"
                        stroke="#9CABFF" stroke-width="4"/>
                    <path
                        d="M48.0312 13.6883L6.5497 18.0482C2.9324 18.4284 0.280794 21.4081 0.627171 24.7037C0.973548 27.9993 4.18674 30.3626 7.80405 29.9824L49.2855 25.6226C52.9028 25.2424 55.5544 22.2626 55.208 18.967C54.8617 15.6715 51.6485 13.3081 48.0312 13.6883Z"
                        fill="#627AFF"/>
                </symbol>
            </svg>
        </>
    );
}

export default UserTag;
