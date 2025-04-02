"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center py-4 px-8 bg-black text-white">
      <h1 className="text-2xl font-bold">NomNom</h1>
      <div className="flex items-center space-x-4">
        <p className="hidden sm:block">test@gmail.com</p>
        <Button  onClick={() => router.push("/login")}>
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default Header;
