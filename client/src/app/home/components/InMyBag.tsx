// "use client";

// import React, { useState } from "react";
// import { CartType } from "@/lib/types";
// import { sendRequest } from "@/lib/send-request";
// import { toast } from "react-toastify";
// import { ShoppingCart } from "lucide-react";

// interface InMyBagProps {
//   setShowInMyBag: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export const InMyBag: React.FC<InMyBagProps> = ({ setShowInMyBag }) => {
//   const [cart, setCart] = useState<CartType>(() => {
//     if (typeof window !== "undefined")
//       return JSON.parse(localStorage.getItem("cart") || "{}");
//     return {};
//   });

//   const [loading, setLoading] = useState(false);

//   const placeOrder = async () => {
//     const token = localStorage.getItem("auth_token");
//     const location = localStorage.getItem("savedLocation");

//     if (!token) {
//       toast("Please login to place an order.", { type: "error" });
//       return;
//     }

//     if (!location) {
//       toast("Please select a location before placing an order.", {
//         type: "error",
//       });
//       return;
//     }

//     if (Object.keys(cart).length === 0) {
//       toast(
//         "Your cart is empty. Add items to the cart before placing an order.",
//         { type: "error" }
//       );
//       return;
//     }

//     try {
//       setLoading(true);

//       const { data: user } = await sendRequest.get("/user", {
//         headers: { Authorization: "Bearer " + token },
//       });

//       const orderData = {
//         totalPrice: Object.values(cart).reduce(
//           (acc, item) => acc + item.price * item.quantity,
//           0
//         ),
//         user: user._id,
//         status: "pending",
//         foodOrderItems: Object.values(cart).map((item) => ({
//           food: item._id,
//           quantity: item.quantity,
//         })),
//       };

//       const response = await sendRequest.post("/food/order", orderData);

//       if (response.status === 201) {
//         toast("Your order has been placed successfully!", { type: "success" });
//         localStorage.setItem("cart", JSON.stringify({}));
//         setCart({});
//         setShowInMyBag(false);
//       }
//     } catch (error) {
//       console.error("Error placing the order:", error);
//       toast("Failed to place order. Please try again.", { type: "error" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full bg-[#f3fdf4] rounded-xl p-6 shadow-lg">
//       <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
//         🛍️ Your Cart
//       </h2>

//       {Object.values(cart).length === 0 ? (
//         <p className="text-lg text-center text-gray-500">Your cart is empty</p>
//       ) : (
//         <div>
//           {Object.values(cart).map((item, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center mb-6 p-4 bg-white border border-green-100 rounded-xl shadow-sm hover:shadow-md transition-all"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold text-green-900">
//                   {item.name} (x{item.quantity})
//                 </h3>
//                 <p className="text-sm text-gray-600">{item.description}</p>
//               </div>
//               <p className="text-xl font-semibold text-green-500">
//                 ${(item.price * item.quantity).toFixed(2)}
//               </p>
//             </div>
//           ))}
//           <div className="flex justify-center mt-6">
//             <button
//               onClick={placeOrder}
//               disabled={loading}
//               className="bg-green-600 px-8 py-3 rounded-lg text-white hover:bg-green-700 hover:scale-105 transition-all duration-300 disabled:opacity-50"
//             >
//               {loading ? (
//                 <ShoppingCart className="animate-spin w-5 h-5 mx-auto" />
//               ) : (
//                 "Place Order"
//               )}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
