"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { logout } from "@/actions/logout";

function SettingsPage() {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  };
  return (
    <div className="text-center items-center justify-center">
      {JSON.stringify(user)}

      <button onClick={onClick} type="submit">
        Logout
      </button>
    </div>
  );
}

export default SettingsPage;
