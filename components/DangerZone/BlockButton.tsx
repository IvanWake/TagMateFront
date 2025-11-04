'use client';

import { whiteListActions } from "@/services/whitelist";
import dangerZoneStyles from "@/components/DangerZone/DangerZone.module.css";

type Props = { inBlackList: boolean, tag: string }

const BlockButton = ({ inBlackList, tag }: Props) => {
    const blockUserHandler = async (type: string) => {
        await whiteListActions(tag, "block");
        window.location.reload();
    };

    const unblockUserHandler = async () => {
        await whiteListActions(tag, "unblock");
        window.location.reload();
    };

    return (
            <div onClick={inBlackList ? unblockUserHandler : blockUserHandler}
                className={ inBlackList ? dangerZoneStyles["danger-unblock"] : dangerZoneStyles["danger-block"] }>
                { inBlackList ? "Разблокировать" : "Заблокировать" }
            </div>
    );
}

export default BlockButton;