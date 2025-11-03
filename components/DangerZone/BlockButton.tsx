'use client';

import dangerZoneStyles from "@/components/DangerZone/DangerZone.module.css";

type Props = { inBlackList: boolean, tag: string }

const BlockButton = ({ inBlackList, tag }: Props) => {
    return (
            <div className={ inBlackList ? dangerZoneStyles["danger-unblock"] : dangerZoneStyles["danger-block"] }>
                { inBlackList ? "Разблокировать" : "Заблокировать" }
            </div>
    );
}

export default BlockButton;