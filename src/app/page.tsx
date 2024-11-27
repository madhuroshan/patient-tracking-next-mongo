import Dashboard from "@/components/global/Dashboard";
import Passkey from "@/components/global/Passkey";

export default function Home() {
  const isAdminAuth = true;
  return isAdminAuth ? <Dashboard /> : <Passkey />;
}
