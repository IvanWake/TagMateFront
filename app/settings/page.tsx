import AuthRoute from "@/components/Auth/AuthRoute";
import SettingsMain from "@/components/Settings/SettingsMain/SettingsMain";
import TabBar from "@/components/TabBar/TabBar";
import "./index.css";

const SettingsPage = () => {
  return (
    <AuthRoute>
      <SettingsMain />
        <TabBar />
    </AuthRoute>
  );
};

export default SettingsPage;
