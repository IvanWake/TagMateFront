import AuthRoute from "@/components/Auth/AuthRoute";
import InterestsEdit from "@/components/Settings/ProfileEdit/InterestsEdit/InterestsEdit";

const SettingsPage = () => {
  return (
    <AuthRoute>
      <InterestsEdit />
    </AuthRoute>
  );
};

export default SettingsPage;
