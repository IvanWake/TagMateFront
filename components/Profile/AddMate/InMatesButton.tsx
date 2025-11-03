'use client';

import { friendsActions } from "@/services/whitelist";
import addMateStyles from "@/components/Profile/AddMate/AddMate.module.css";

type Props = { tag: string };

const InMatesButton = ({ tag }: Props) => {
    const removeMateHandler = async () => {
        await friendsActions(tag, "remove");
        window.location.reload();
    };

    return (
        <div onClick={removeMateHandler}
            className={`${addMateStyles["user-mate-menu"]}`}>
            <div className={`${addMateStyles["user-add-mate-active"]}`}>Мейт</div>
        </div>
    );
}

export default InMatesButton;