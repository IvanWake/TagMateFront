import addMateStyles from "@/components/Profile/AddMate/AddMate.module.css";

type Props = { tag: string };

const RequestPendingButton = ({ tag }: Props) => {
    return (
        <div className={`${addMateStyles["user-mate-menu"]}`}>
            <div className={`${addMateStyles["user-add-mate-active"]}`}>Заявка отправлена</div>
        </div>
    );
}

export default RequestPendingButton;