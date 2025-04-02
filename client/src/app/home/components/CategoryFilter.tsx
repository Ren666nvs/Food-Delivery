"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

type CategoryProps = {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
};

const categoryEmojis: Record<string, string> = {
  Appetizers: "🍤",
  Salads: "🥗",
  Pizzas: "🍕",
  Brunch: "🥞",
  Desserts: "🍰",
  Seafood: "🐟",
};

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryProps) => {
  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = async () => {
    try {
      const categoryResponse = await axios.get("/food/category");
      setCategories(categoryResponse.data);
    } catch {
      toast("Failed to fetch categories");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex justify-center space-x-4 mt-10">
      <button
        onClick={() => onSelectCategory(null)}
        className={`py-2 px-4 rounded-lg font-semibold ${
          !selectedCategory ? "bg-red-500 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`py-2 px-4 rounded-lg flex items-center ${
            selectedCategory === category ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          <span className="mr-2">{categoryEmojis[category] || "📌"}</span>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;