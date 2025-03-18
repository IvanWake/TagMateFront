import addMateStyles from "@/components/Profile/AddMate/AddMate.module.css";

const RequestRejected = () => {
    return (
        <div className={`${addMateStyles["user-mate-menu"]}`}>
            <div className={`${addMateStyles["user-add-mate-rejected"]}`}>Заявка отклонена</div>
        </div>
    );
}

export default RequestRejected;