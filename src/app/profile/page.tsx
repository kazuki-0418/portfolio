import { Outside } from "@/components/elements/Outside";
import { ProfilePage } from "@/components/layouts/ProfilePage";

export default function _() {
  return (
    <main className="h-screen">
      <Outside blend="screen">
        <ProfilePage />
      </Outside>
    </main>
  );
}
