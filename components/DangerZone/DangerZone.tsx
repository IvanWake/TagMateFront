import dangerZoneStyles from "./DangerZone.module.css";
const DangerZone = () => {
    return (
        <div className={dangerZoneStyles["user-danger-zone"]}>
            <div className={dangerZoneStyles["section-title"]}>Danger зона</div>
            <div className={dangerZoneStyles["danger-actions"]}>
                <div className={dangerZoneStyles["danger-item"]}>Заблокировать</div>
            </div>
        </div>
    );
}

export default DangerZone;
