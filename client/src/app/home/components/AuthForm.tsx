"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { sendRequest } from "@/lib/send-request";
import axios from "axios";

interface AuthFormProps {
  formType: "login" | "signup";
}

const AuthForm = ({ formType }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formType === "signup" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const endpoint = formType === "login" ? "/login" : "/user/signup";
      const response = await sendRequest.post(endpoint, { email, password });

      if (response.status === 200 || response.status === 201) {
        formType === "login" ? router.push("/") : router.push("/login");
      }
    } catch (error) {
      console.error(`${formType} error:`, error);
      if (axios.isAxiosError(error)) {
        setError(error.code === "ERR_NETWORK" ? "Network error." : "Invalid credentials.");
      } else {
        setError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <img src="images/food-delivery.jpg" alt="Auth" className="w-20 h-20" />
          <h2 className="text-4xl font-extrabold text-gray-800">
            {formType === "login" ? "Welcome Back!" : "Create Account"}
          </h2>
          <p className="text-gray-500 text-sm">
            {formType === "login" ? "Login to your account" : "Sign up to get started"}
          </p>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Password"
              required
            />
          </div>
          {formType === "signup" && (
            <div>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Confirm Password"
                required
              />
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300 disabled:bg-purple-300"
          >
            {loading ? (formType === "login" ? "Logging In..." : "Signing Up...") : formType === "login" ? "Log In" : "Sign Up"}
          </button>
          <button
            type="button"
            className="w-full py-3 bg-gray-200 text-purple-600 rounded-lg hover:bg-gray-300 transition duration-300"
            onClick={() => router.push(formType === "login" ? `/signup` : `/login`)}
          >
            {formType === "login" ? "Create Account" : "Already have an account? Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
