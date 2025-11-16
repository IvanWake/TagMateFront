'use client';
import AuthRoute from "@/components/Auth/AuthRoute";
import TabBar from "@/components/TabBar/TabBar";
import MatesRequests from "@/components/Mates/MatesRequests/MatesRequests";


const MatesRequest = () => {

    return (
        <AuthRoute>
            <MatesRequests />
            <TabBar />
        </AuthRoute>
    );
}

export default MatesRequest;