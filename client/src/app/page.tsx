
// import Order from "@/app/home/components/Order";
// import { Categories } from "./home/components/Categories";
// import { Foods } from "@/app/home/components/Foods";

// const Homepage = () => {
//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
//       {/* Navbar */}
//       <div className="md:w-[250px]">
//         <Navbar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-y-auto">
//         <div className="sticky top-0 z-10 bg-gray-800">
//           {/* <Categories /> */}
//         </div>
//         <div className="mt-4">
//           {/* <Foods /> */}
//         </div>
//       </div>

//       {/* Order Sidebar */}
//       <div className="flex-shrink-0 w-full md:w-[400px] bg-gray-800">
//         {/* <Order /> */}
//       </div>
//     </div>
//   );
// };

// export default Homepage;
'use client';

import Navbar from "@/app/home/components/Navbar";
import Banner from "./home/components/Banner";
import Categories from "@/app/home/components/Categories"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="px-6 py-8 space-y-8">
        <Banner />
        <Categories /> 
      </div>
    </main>
  );
}
