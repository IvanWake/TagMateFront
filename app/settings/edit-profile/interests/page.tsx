import AuthRoute from "@/components/Auth/AuthRoute";
import InterestsEdit from "@/components/Settings/ProfileEdit/InterestsEdit/InterestsEdit";
import "../../index.css";

const SettingsPage = () => {
  return (
    <AuthRoute>
      <InterestsEdit />
    </AuthRoute>
  );
};

export default SettingsPage;
