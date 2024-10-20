"use client";

import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild: boolean;
};

function LoginButton({ children, mode = "redirect", asChild }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}

export default LoginButton;
