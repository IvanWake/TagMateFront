'use client';
import AuthRoute from "@/components/Auth/AuthRoute";
import MatesMain from "@/components/Mates/MatesMain/MatesMain";
import TabBar from "@/components/TabBar/TabBar";


const Mates = () => {

    return (
        <AuthRoute>
            <MatesMain />
            <TabBar />
        </AuthRoute>
    );
}

export default Mates;