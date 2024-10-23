import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register_me } from "@/Services/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import NavBar from "@/components/NavBar";

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("token")) {
      router.push("/");
    }
  }, [router]);

  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState({ email: "", password: "", name: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setError({ ...error, email: "Email Field is Required" });
      return;
    }
    if (!formData.password) {
      setError({ ...error, password: "Password Field is required" });
      return;
    }
    if (!formData.name) {
      setError({ ...error, name: "Name Field is required" });
      return;
    }

    const data = await register_me(formData);
    if (data.success) {
      toast.success(data.message);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="w-full h-screen bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 glassmorphic-background rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <h1 className="text-2xl font-bold text-center text-white animate-pulse">
            Register your account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                name="name"
                id="name"
                className="bg-transparent border border-gray-600 text-gray-300 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="Enter your name"
              />
              {error.name && (
                <p className="text-sm text-red-500">{error.name}</p>
              )}
            </div>

            <div className="text-left">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your Email
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                name="email"
                id="email"
                className="bg-transparent border border-gray-600 text-gray-300 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="name@company.com"
              />
              {error.email && (
                <p className="text-sm text-red-500">{error.email}</p>
              )}
            </div>

            <div className="text-left">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                name="password"
                id="password"
                className="bg-transparent border border-gray-600 text-gray-300 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition duration-300 ease-in-out transform hover:scale-105"
                placeholder="••••••••"
              />
              {error.password && (
                <p className="text-sm text-red-500">{error.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:bg-gradient-to-l hover:from-purple-700 hover:to-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg"
            >
              Sign Up
            </button>

            <p className="text-sm font-light text-gray-400">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-blue-400 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
        <ToastContainer />
      </div>

      <style jsx>{`
        .glassmorphic-background {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
}
