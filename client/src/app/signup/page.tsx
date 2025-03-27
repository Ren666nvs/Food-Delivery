"use client";
import AuthForm from "@/app/home/components/AuthForm";
import Image from "next/image";
export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-row justify-between bg-white">
      <div className="w-[40vw] h-screen flex justify-center items-center">
        <AuthForm formType="signup" />
      </div>

      {/* <Image
  src="/images/food-delivery.jpg"
  alt="Food delivery"
  fill
  className="object-cover sm:object-contain lg:object-cover"
/> */}
    </div>
  );
}
