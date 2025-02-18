import purposeStyles from "./User.module.css";

const UserPurpose = ({ purpose }: { purpose: string }) => {
    const purposesValues = {
        "communication": "общения",
        "relationship": "отношений",
        "confederate": "единомышленников",
        "all": "всего",
    }

    return (
        <div className={purposeStyles["user-status-section"]}>
            <div className={purposeStyles["section-title"]}>Статус</div>
            <div className={purposeStyles["status-display"]}>
                <div className={purposeStyles["status-text"]}>В поиске {purposesValues[purpose]}</div>
                <img src={`/purposesImg/${purpose}.png`} alt="status icon" className={purposeStyles["status-icon"]} />
            </div>
        </div>
    );
}

export default UserPurpose;
