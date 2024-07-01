import Header from "@/components/Header/Header";
import HeaderProfile from "@/components/Header/HeaderProfile";
import HeaderProfileInfo from "@/components/Header/HeaderProfileInfo";
import Stats from "@/components/Stats/Stats";
import UserBio from "@/components/UserBio/UserBio";
import Interests from "@/components/Interests/Interests";
import FamilyStatus from "@/components/FamilyStatus/FamilyStatus";
import Gallery from "@/components/Gallery/Gallery";

const Page = () => {
    return (
        <>
            <Header tag={"AGJ5"}/>
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