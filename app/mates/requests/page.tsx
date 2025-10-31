import AuthRoute from "@/components/Auth/AuthRoute";
import TabBar from "@/components/TabBar/TabBar";
import MatesRequests from "@/components/Mates/MatesRequests/MatesRequests";


const MatesRequestPage = () => {

    return (
        <AuthRoute>
            <MatesRequests />
            <TabBar />
        </AuthRoute>
    );
}

export default MatesRequestPage;