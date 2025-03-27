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
    <div className="max-w-md p-8 space-y-4 rounded-xl shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        {formType === "login" ? "Welcome Back!" : "Join Us!"}
      </h2>
      <p className="text-center text-gray-500">
        {formType === "login" ? "Login to continue" : "Create your account"}
      </p>

      {error && <div className="text-red-500 text-center">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {formType === "signup" && (
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-600">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {loading ? (formType === "login" ? "Logging In..." : "Signing Up...") : formType === "login" ? "Log In" : "Sign Up"}
        </button>

        <button
          type="button"
          className="w-full py-2 bg-gray-100 text-blue-500 rounded-lg hover:bg-gray-200 transition duration-300"
          onClick={() => router.push(formType === "login" ? `/signup` : `/login`)}
        >
          {formType === "login" ? "Create Account" : "Already have an account? Log In"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
