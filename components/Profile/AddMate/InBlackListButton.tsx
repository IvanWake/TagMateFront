import addMateStyles from "@/components/Profile/AddMate/AddMate.module.css";

type Props = { text: string }

const RequestPendingButton = ({ text }: Props) => {
    return (
        <div className={`${addMateStyles["user-mate-menu"]}`}>
            <div className={`${addMateStyles["user-add-mate-active"]}`}>{text}</div>
        </div>
    );
}

export default RequestPendingButton;