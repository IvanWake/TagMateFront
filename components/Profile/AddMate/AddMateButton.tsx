'use client';

import addMateStyles from "./AddMate.module.css";
import { whiteListActions } from "@/services/whitelist";


const AddMateButton = ({ tag }: { tag: string }) => {
    const addMateHandler = async () => {
            await whiteListActions(tag, "send");
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