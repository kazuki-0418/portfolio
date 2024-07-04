import { Outside } from "@/components/elements/Outside";
import { ProfilePage } from "./ProfilePage";

export const Profile = () => {
  return (
    <main className="h-screen" id="profile">
      {/* <Outside blend="screen"> */}
      <ProfilePage />
      {/* </Outside> */}
    </main>
  );
};
