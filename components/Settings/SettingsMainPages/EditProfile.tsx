'use client';
import AuthRoute from "@/components/Auth/AuthRoute";
import ProfileEdit from "@/components/Settings/ProfileEdit/ProfileEdit";
import TabBar from "@/components/TabBar/TabBar";
import "@/app/settings/index.css";


const EditProfile = () => {
    return (
        <AuthRoute>
            <ProfileEdit />
            <TabBar />
        </AuthRoute>
    );
};

export default EditProfile;
