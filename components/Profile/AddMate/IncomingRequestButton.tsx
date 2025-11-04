'use client';

import { whiteListActions } from "@/services/whitelist";
import addMateStyles from "@/components/Profile/AddMate/AddMate.module.css";

type Props = { tag: string }

const IncomingRequestButton = ({ tag }: Props) => {
    const acceptMateRequestHandler = async () => {
        await whiteListActions(tag, "accept");
        window.location.reload();
    };

    return (
        <div onClick={acceptMateRequestHandler}>
            <div className={`${addMateStyles["user-mate-menu"]}`}>
                <div className={`${addMateStyles["user-add-mate"]}`}>Принять заявку</div>
            </div>
        </div>
    );
}

export default IncomingRequestButton;