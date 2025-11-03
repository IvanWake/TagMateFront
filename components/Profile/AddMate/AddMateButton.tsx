'use client';

import addMateStyles from "./AddMate.module.css";
import { friendSend } from "@/services/whitelist";


const AddMateButton = ({ tag }: { tag: string }) => {
    const addMateHandler = async () => {
            const res = await friendSend(tag);
        window.location.reload();
    };

    return (
        <div onClick={addMateHandler}>
            <div className={`${addMateStyles["user-mate-menu"]}`}>
                <div className={`${addMateStyles["user-add-mate"]}`}>Добавить в мейты</div>
            </div>
        </div>
    );
}

export default AddMateButton;