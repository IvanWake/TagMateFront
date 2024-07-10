'use client';

import { useParams, notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import HeaderProfile from "@/components/Header/HeaderProfile";
import Stats from "@/components/Stats/Stats";
import UserBio from "@/components/UserBio/UserBio";
import Interests from "@/components/Interests/Interests";
import FamilyStatus from "@/components/FamilyStatus/FamilyStatus";
import Gallery from "@/components/Gallery/Gallery";
import HeaderProfileInfo from "@/components/Header/HeaderProfileInfo";


const Page = () => {
    const params = useParams();

    return (
            <>
                <Header tag={params.tag.toString()}/>
                <HeaderProfile />
                <main>
                    <HeaderProfileInfo />
                    <Stats />
                    <UserBio />
                    <Interests />
                    <FamilyStatus />
                    <Gallery />
                </main>
            </>
    );
}

export default Page;