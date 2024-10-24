import NavBar from "@/components/NavBar";
import { forget_password } from "@/Services/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgetPassword() {
  const Router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

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
    if (!formData.confirmPassword) {
      setError({
        ...error,
        confirmPassword: "Confirm Password Field is required",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password do not match");
    }

    const res = await forget_password(formData);
    if (res.success) {
      toast.success(res.message);
      setTimeout(() => {
        Router.push("/auth/login");
      }, 1000);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <NavBar />
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="relative w-full p-6 bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md sm:p-8 transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-indigo-600 opacity-75 blur-md rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
                Change Password
              </h2>
              <form
                onSubmit={handleSubmit}
                className="mt-4 space-y-6 lg:mt-5"
              >
                <div className="text-left">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-500 focus:border-purple-700 block w-full p-2.5 transition-all duration-300 ease-in-out hover:shadow-glow hover:shadow-purple-500/50"
                    placeholder="name@company.com"
                    required
                  />
                  {error.email && (
                    <p className="text-sm text-red-500">{error.email}</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    New Password
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-500 focus:border-purple-700 block w-full p-2.5 transition-all duration-300 ease-in-out hover:shadow-glow hover:shadow-purple-500/50"
                    required
                  />
                  {error.password && (
                    <p className="text-sm text-red-500">{error.password}</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-500 focus:border-purple-700 block w-full p-2.5 transition-all duration-300 ease-in-out hover:shadow-glow hover:shadow-purple-500/50"
                    required
                  />
                  {error.confirmPassword && (
                    <p className="text-sm text-red-500">
                      {error.confirmPassword}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="relative w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out hover:shadow-purple-500/50 transform hover:scale-110 hover:shadow-glow"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}
