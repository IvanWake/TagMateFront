'use client';

import { useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Header from "@/components/Header/Header";
import HeaderProfile from "@/components/Header/HeaderProfile";
import Stats from "@/components/Stats/Stats";
import UserBio from "@/components/UserBio/UserBio";
import Interests from "@/components/Interests/Interests";
import FamilyStatus from "@/components/FamilyStatus/FamilyStatus";
import Gallery from "@/components/Gallery/Gallery";
import HeaderProfileInfo from "@/components/Header/HeaderProfileInfo";

const fetchProfileData = async (tag) => {
    let data = [];
    const res = await fetch(`http://localhost:3000/api/profile/${tag}`, {
        method: "GET"
    });

    if (!res.ok) {
        return undefined;
    }
    const currentData = await res.json();
    data.push(currentData);
}

const Page = ({ params }) => {

    const data = fetchProfileData(params.tag);
    if (!data) {
        notFound();
    } else {
        console.log(data)
    }

    return (
        <>
            <Header tag={params.tag}/>
            <HeaderProfile/>
            <main>
                <HeaderProfileInfo/>
                <Stats/>
                <UserBio/>
                <Interests/>
                <FamilyStatus/>
                <Gallery/>
            </main>
        </>
    );
}

export default Page;