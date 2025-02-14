"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src={"/logo.svg"} width={152} height={60} alt="Logo" />
          <Button asChild variant={"secondary"}>
            <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in" }>
              {pathname === "/sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-12">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
