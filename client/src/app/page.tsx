import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Truck, Star } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl p-10 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Fresh, Fast & Delicious
          </h1>
          <p className="text-lg mb-6">
            Your favorite meals, delivered straight to your door.
          </p>
          <Button className="bg-white text-orange-500 font-bold hover:bg-gray-200">
            Order Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="shadow-lg">
          <CardHeader className="flex justify-center text-orange-500">
            <Truck size={36} />
          </CardHeader>
          <CardContent>
            <CardTitle>Fast Delivery</CardTitle>
            <p className="text-gray-600 text-sm">
              Get your food delivered in under 30 minutes.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="flex justify-center text-orange-500">
            <Star size={36} />
          </CardHeader>
          <CardContent>
            <CardTitle>Top Quality</CardTitle>
            <p className="text-gray-600 text-sm">
              Only the freshest ingredients and top-rated chefs.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="flex justify-center text-orange-500">
            <ShoppingCart size={36} />
          </CardHeader>
          <CardContent>
            <CardTitle>Easy Ordering</CardTitle>
            <p className="text-gray-600 text-sm">
              Simple and intuitive ordering process.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Popular Dishes Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Popular Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-lg">
            <p> 🍕</p>
            <CardContent>
              <CardTitle>Margherita Pizza</CardTitle>
              <p className="text-gray-600 text-sm">
                Classic Italian pizza with fresh basil and mozzarella.
              </p>

              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Add to Cart
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <p> 🍔</p>
            <CardContent>
              <CardTitle>Cheeseburger</CardTitle>
              <p className="text-gray-600 text-sm">
                Juicy grilled beef patty with melted cheese.
              </p>
              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Add to Cart
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <p>🍣</p>
            <CardContent>
              <CardTitle>Salmon Sushi</CardTitle>
              <p className="text-gray-600 text-sm">
                Fresh salmon slices over seasoned rice.
              </p>
              <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-orange-600">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 rounded-lg">
        <p>&copy; 2025 Foodie Express. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
