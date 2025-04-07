// "use client";

// import React, { useState, useEffect } from "react";
// import { ShoppingCart } from "lucide-react";
// import { UserData } from "@/lib/types";
// import { sendRequest } from "@/lib/send-request";

// export const Orders = () => {
//   const [userData, setUserData] = useState<UserData | null>(null);
//   const [loading, setLoading] = useState(false);

//   const fetchUserData = async () => {
//     const token = localStorage.getItem("auth_token");
//     try {
//       setLoading(true);
//       const response = await sendRequest.get("/user", {
//         headers: { Authorization: "Bearer " + token },
//       });

//       if (response.status === 200) {
//         setUserData(response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <div className="w-full max-h-[70vh] overflow-y-auto bg-[#f3fdf4] rounded-2xl p-6 shadow-lg">
//       <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
//         🧾 Your Orders
//       </h2>

//       {loading ? (
//         <div className="flex justify-center items-center h-40">
//           <ShoppingCart className="animate-spin text-green-600 w-10 h-10" />
//         </div>
//       ) : userData?.orderedFoods.length === 0 ? (
//         <p className="text-lg text-center text-gray-500">No orders yet.</p>
//       ) : (
//         <div className="space-y-6">
//           {userData?.orderedFoods.map((order) => (
//             <div
//               key={order._id}
//               className="bg-white p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-xl transition duration-300"
//             >
//               <p className="text-base text-gray-700">
//                 <strong className="text-green-700">Status:</strong>{" "}
//                 {order.status}
//               </p>
//               <p className="text-base text-gray-700">
//                 <strong className="text-green-700">Total Price:</strong>{" "}
//                 <span className="text-green-500 font-semibold">
//                   ${order.totalPrice.toFixed(2)}
//                 </span>
//               </p>

//               <div className="flex flex-wrap gap-4 mt-4">
//                 {order.foodOrderItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-full sm:w-1/3 lg:w-1/4 bg-green-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
//                   >
//                     <img
//                       src={item.food.image}
//                       alt={item.food.name}
//                       className="w-full h-32 object-cover rounded-xl mb-3"
//                     />
//                     <div className="text-center">
//                       <h4 className="text-lg font-bold text-green-800">
//                         {item.food.name}
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         Quantity: {item.quantity}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         Price: ${item.food.price}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
