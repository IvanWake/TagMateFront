import AuthRoute from "@/components/Auth/AuthRoute";
import ProfileEdit from "@/components/Settings/ProfileEdit/ProfileEdit";
import TabBar from "@/components/TabBar/TabBar";
import "../index.css";


const SettingsPage = () => {
  return (
    <AuthRoute>
      <ProfileEdit />
        <TabBar />
    </AuthRoute>
  );
};

export default SettingsPage;
