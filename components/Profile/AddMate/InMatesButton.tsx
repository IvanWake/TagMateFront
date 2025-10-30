import addMateStyles from "@/components/Profile/AddMate/AddMate.module.css";

const InMatesButton = () => {
    return (
        <div className={`${addMateStyles["user-mate-menu"]}`}>
            <div className={`${addMateStyles["user-add-mate-active"]}`}>Мейт</div>
        </div>
    );
}

export default InMatesButton;