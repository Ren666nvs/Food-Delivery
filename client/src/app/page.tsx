"use client";

import { useState } from "react";
import UserHeader from "@/app/home/components/Header";
import CategoryFilter from "@/app/home/components/CategoryFilter";
import FoodCard from "@/app/home/components/FoodCard";
import Footer from "@/app/home/components/Footer";
import FoodModal from "@/app/home/components/FoodModal";

const sampleFoods = [
  {
    name: "Finger Food",
    description: "Crunchy snack with fresh ingredients.",
    price: 12.99,
    image: "/images/finger-food.jpeg",
  },
  {
    name: "Cranberry Bites",
    description: "Tangy bites with cranberry and cheese.",
    price: 10.99,
    image: "/images/CranberryBites.jpeg",
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFoods = sampleFoods.filter((food) =>
    selectedCategory ? food.category === selectedCategory : true
  );

  return (
    <div className="bg-white min-h-screen">
      <UserHeader />
      <CategoryFilter
        categories={["Appetizers", "Salads", "Pizzas", "Desserts"]}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredFoods.map((food, index) => (
          <FoodCard key={index} food={food} onAddToCart={() => {}} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
