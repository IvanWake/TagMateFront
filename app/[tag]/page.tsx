'use client';

import { useParams, notFound } from "next/navigation";

const Page = () => {
    const params = useParams();

    params ? notFound() : null;

    return (
        <div>{params.tag}</div>
    );
}

export default Page;