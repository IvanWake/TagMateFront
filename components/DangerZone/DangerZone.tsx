"use client";
import dangerZoneStyles from "./DangerZone.module.css";
import BlockButton from "@/components/DangerZone/BlockButton";
import RemoveFriendButton from "@/components/DangerZone/RemoveFriendButton";

type Props = { isUserMate: string, inBlackList: boolean, tag: string }

const DangerZone = ({ isUserMate, inBlackList, tag }: Props) => {
    return (
        <div className={dangerZoneStyles["user-danger-zone"]}>
            <div className={dangerZoneStyles["section-title"]}>Danger зона</div>
            <div className={dangerZoneStyles["danger-actions"]}>
                { isUserMate === "access" && <RemoveFriendButton tag={tag} /> }
                <BlockButton inBlackList={inBlackList} tag={tag} />
            </div>
        </div>
    );
}

export default DangerZone;
