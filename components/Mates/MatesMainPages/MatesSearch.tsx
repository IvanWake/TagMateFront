'use client';
import AuthRoute from "@/components/Auth/AuthRoute";
import TabBar from "@/components/TabBar/TabBar";
import MatesSearch from "@/components/Mates/MatesSearch/MatesSearch";


const MatesSearchMain = () => {

    return (
        <AuthRoute>
            <MatesSearch />
            <TabBar />
        </AuthRoute>
    );
}

export default MatesSearchMain;