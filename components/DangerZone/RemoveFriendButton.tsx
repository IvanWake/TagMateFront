'use client';

import dangerZoneStyles from "@/components/DangerZone/DangerZone.module.css";


type Props = {
    tag: string
}

const RemoveFriendButton = ({ tag }: Props) => {
    return (
        <div className={dangerZoneStyles["danger-remove-friend"]}>Удалить из мейтов</div>
    );
}

export default RemoveFriendButton;