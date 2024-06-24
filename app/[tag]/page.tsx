'use client';

import { useParams } from "next/navigation";

const Page = () => {
    const params = useParams();
    return (
        <div>{params.tag}</div>
    );
}

export default Page;