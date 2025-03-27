// components/FoodCard.tsx
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type Food = {
  name: string;
  description: string;
  price: number;
  image?: string;
};

type FoodCardProps = {
  food: Food;
  onAddToCart: (food: Food) => void;
};

const FoodCard = ({ food, onAddToCart }: FoodCardProps) => {
  return (
    <div className="max-w-sm w-full bg-gray-100 shadow-lg rounded-lg overflow-hidden">
      <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-lg font-semibold">{food.name}</h2>
        <p className="text-gray-500 mt-2">{food.description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-2xl font-bold text-red-500">${food.price}</p>
          <Button onClick={() => onAddToCart(food)} className="bg-black text-white">
            <Plus className="mr-2" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
