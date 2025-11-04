'use client';

import AddMateButton from "@/components/Profile/AddMate/AddMateButton";
import RequestPendingButton from "@/components/Profile/AddMate/RequestPendingButton";
import InMatesButton from "@/components/Profile/AddMate/InMatesButton";
import IncomingRequestButton from "@/components/Profile/AddMate/IncomingRequestButton";

type Props = {
    tag: string,
    isUserMate: string
}

const AddMate = ({ tag, isUserMate }: Props) => {
    const isUserMateValues = {
        "access": <InMatesButton tag={tag}/>,
        "pending": <RequestPendingButton tag={tag} />,
        "null": <AddMateButton tag={tag} />,
        "subscribe": <IncomingRequestButton tag={tag}/>
    }

    return (
        <>
            { isUserMateValues[isUserMate] }
        </>
    );
}

export default AddMate;