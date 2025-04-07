// "use client";

// import { sendRequest } from "@/lib/send-request";
// import { FoodCategory } from "@/lib/types";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { parseAsString, useQueryState } from "nuqs";

// const CATEGORIES_EMOJIS: Record<string, React.ReactNode> = {
//   Appetizers: "🍤",
//   Salads: "🥗",
//   Pizzas: "🍕",
//   Brunch: "🥞",
//   Desserts: "🍰",
//   Seafood: "🐟",
// };

// export const Categories = () => {
//   const [, setSelectedCategory] = useQueryState("categories", parseAsString);
//   const [categories, setCategories] = useState<FoodCategory[]>([]);

//   const getCategories = async () => {
//     try {
//       const categoryResponse = await sendRequest.get("/food/category");
//       setCategories(categoryResponse.data);
//     } catch {
//       toast("Failed to fetch categories", { type: "error" });
//     }
//   };

//   useEffect(() => {
//     getCategories();
//   }, []);

//   return (
//     <div className="flex justify-center flex-wrap gap-4 mt-10 px-4">
//       <button
//         onClick={() => setSelectedCategory(null)}
//         className="bg-green-100 text-green-800 py-2 px-5 rounded-full font-semibold text-base shadow hover:bg-green-200 transition-all"
//       >
//         All
//       </button>

//       {categories?.map((category) => (
//         <button
//           key={category._id}
//           onClick={() => setSelectedCategory(category._id)}
//           className="bg-green-100 text-green-800 py-2 px-5 rounded-full font-semibold text-base shadow hover:bg-green-200 flex items-center gap-2 transition-all"
//         >
//           <span>
//             {CATEGORIES_EMOJIS[category.categoryName.toLowerCase()] || "📌"}
//           </span>
//           <span>{category.categoryName}</span>
//         </button>
//       ))}
//     </div>
//   );
// };
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

const CategorySkeleton = () => {
  return (
    <Carousel className="w-full px-10 md:px-36 mt-15">
      <CarouselContent className="w-full">
        {Array(10)
          .fill(40)
          .map((_, index) => (
            <CarouselItem key={index} className="basis-1/15">
              <div className="flex flex-col justify-center items-center gap-2">
                <Skeleton className="w-14 h-14 bg-slate-300  rounded-full flex justify-center items-center cursor-pointer"></Skeleton>
                <Skeleton className="w-8 h-3 mt-1 bg-slate-300" />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CategorySkeleton;