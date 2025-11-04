'use client';

import { friendsActions } from "@/services/whitelist";
import dangerZoneStyles from "@/components/DangerZone/DangerZone.module.css";

type Props = { tag: string }

const RemoveFriendButton = ({ tag }: Props) => {
    const removeMateHandler = async () => {
        await friendsActions(tag, "remove");
        window.location.reload();
    };

    return (
        <div onClick={removeMateHandler}
            className={dangerZoneStyles["danger-remove-friend"]}>
            Удалить из мейтов
        </div>
    );
}

export default RemoveFriendButton;