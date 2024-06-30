import { Outside } from "@/components/elements/Outside";
import { ContactPage } from "@/components/layouts/ContactPage";

export default function _() {
  return (
    <main className="h-screen">
      <Outside blend="difference">
        <ContactPage />
      </Outside>
    </main>
  );
}
