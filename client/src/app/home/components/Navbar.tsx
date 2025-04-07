"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { User, ShoppingCart, MapPin } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="w-full  h-full px-6 py-4 bg-black-900 text-white flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-center">
  <div className="flex items-center justify-center gap-2">
    <div className="w-6 h-6 relative">
      <Image
        src="/images/HomeCooked.png"
        alt="Home"
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div className="text-2xl font-bold">
      <span className="text-white">Nom</span>
      <span className="text-red-500">Nom</span>
    </div>
  </div>
  
  <div className="text-sm text-white font-normal mt-1">
    Swift delivery
  </div>
</div>




      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Location dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className=" flex items-center gap-2"
            >
              <MapPin size={16} />
              <span className="text-sm">Add Location</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black">
            <DropdownMenuItem>Home</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Cart */}
        <div className="bg-white text-black px-3 py-1 rounded-md text-sm">
          <ShoppingCart />
        </div>

        {/* User */}
        <div className="bg-red-500 px-3 py-1 rounded-md text-sm">
          <User />
        </div>

        {/* Sign out button */}
        <Button className="border-white text-white" variant="outline">
          Sign out
        </Button>
      </div>
    </header>
  );
  
}
