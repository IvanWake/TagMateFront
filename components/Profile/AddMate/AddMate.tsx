'use client';

import addMateStyles from "./AddMate.module.css";
import { friendSend } from "@/services/whitelist";


const AddMate = ({ tag }: { tag: string }) => {
    const testFetch = async () => {
            const res = await friendSend(tag);
    };

    return (
        <div onClick={testFetch}>
            <div className={`${addMateStyles["user-mate-menu"]}`}>
                <div className={`${addMateStyles["user-add-mate"]}`}>Добавить в мейты</div>
            </div>
        </div>
    );
}

export default AddMate;