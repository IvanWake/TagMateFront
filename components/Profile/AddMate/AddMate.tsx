'use client';

import AddMateButton from "@/components/Profile/AddMate/AddMateButton";
import RequestPendingButton from "@/components/Profile/AddMate/RequestPendingButton";

type Props = {
    tag: string,
    isUserMate: string
}

const AddMate = ({ tag, isUserMate }: Props) => {
    const isUserMateValues = {
        access: <h1 style={{ color: "white" }}>Коля дай стейт</h1>,
        pending: <RequestPendingButton tag={tag} />,
        none: <AddMateButton tag={tag} />
    }

    return (
        <>
            {/*{*/}
            {/*    isUserMate ?*/}
            {/*        <h1>Пизда</h1> : */}
            {/*        <AddMateButton tag={tag} />*/}
            {/*}*/}
            {isUserMateValues[isUserMate]}
        </>
    );
}

export default AddMate;