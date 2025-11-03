'use client';

import { friendsActions } from "@/services/whitelist";
import addMateStyles from "@/components/Profile/AddMate/AddMate.module.css";

type Props = { tag: string };

const RequestPendingButton = ({ tag }: Props) => {
    const cancelMateRequestHandler = async () => {
        await friendsActions(tag, "cancel");
        window.location.reload();
    };
    return (
        <div onClick={cancelMateRequestHandler}
            className={`${addMateStyles["user-mate-menu"]}`}>
            <div className={`${addMateStyles["user-add-mate-active"]}`}>Заявка отправлена</div>
        </div>
    );
}

export default RequestPendingButton;