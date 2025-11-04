'use client';

import AddMateButton from "@/components/Profile/AddMate/AddMateButton";
import RequestPendingButton from "@/components/Profile/AddMate/RequestPendingButton";
import InMatesButton from "@/components/Profile/AddMate/InMatesButton";
import IncomingRequestButton from "@/components/Profile/AddMate/IncomingRequestButton";
import InBlackListButton from "@/components/Profile/AddMate/InBlackListButton";

type Props = {
    tag: string,
    isUserMate: string,
    isBlocked: boolean
}

const AddMate = ({ tag, isUserMate, isBlocked }: Props) => {
    const isUserMateValues = {
        "access": <InMatesButton />,
        "pending": <RequestPendingButton tag={tag} />,
        "null": <AddMateButton tag={tag} />,
        "subscribe": <IncomingRequestButton tag={tag} />
    }

    return (
        <>
            {
                isBlocked ? <InBlackListButton />: isUserMateValues[isUserMate]
            }
        </>
    );
}

export default AddMate;