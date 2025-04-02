
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useState } from "react";
import { parseAsString, useQueryState } from "nuqs";
import axios from "axios";

type Food = {
  _id: string;
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

type FoodModalProps = {
  foods: Food[];
};

export const FoodModal = ({ foods }: FoodModalProps) => {
  const [foodId, setFoodId] = useQueryState("food", parseAsString);
  const selectedFood = foods.find((food) => food._id === foodId);
  const [quantity, setQuantity] = useState<number>(1);
  const totalPrice = quantity * (selectedFood?.price ?? 0);

  const addToCart = (food: Food, quantity: number) => {
    const getCart = JSON.parse(localStorage.getItem("cart") || "{}");

    let newCartData;
    if (getCart[food._id]) {
      newCartData = {
        ...getCart,
        [food._id]: {
          ...getCart[food._id],
          quantity: getCart[food._id].quantity + quantity,
        },
      };
    } else {
      newCartData = {
        ...getCart,
        [food._id]: { ...food, quantity },
      };
    }

    localStorage.setItem("cart", JSON.stringify(newCartData));
    toast(`${food.name} (x${quantity}) has been added to the cart!`);
  };

  if (selectedFood)
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-gray-800">
            {selectedFood.name}
          </h2>
          <p className="text-gray-600">{selectedFood.description}</p>
          <p className="text-xl font-semibold text-gray-900 mt-4">
            ${selectedFood.price}
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-300 text-gray-800 p-2 rounded-full"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-12 text-center border border-gray-300 rounded"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-300 text-gray-800 p-2 rounded-full"
              >
                +
              </button>
            </div>
            <p className="text-xl font-semibold text-gray-900">
              ${totalPrice.toFixed(2)}
            </p>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => {
                addToCart(selectedFood, quantity);
                setFoodId(null);
              }}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Add to Cart
            </button>
            <button
              onClick={() => setFoodId(null)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );

  return null;
};