import addMateStyles from "@/components/Profile/AddMate/AddMate.module.css";

const RequestPendingButton = () => {
    return (
        <div className={`${addMateStyles["user-mate-menu"]}`}>
            <div className={`${addMateStyles["user-add-mate-active"]}`}>Вы в чёрном списке</div>
        </div>
    );
}

export default RequestPendingButton;