import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Router from "next/router";
import { login_me } from "@/Services/auth";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUserData } from "@/Utils/UserSlice";
import NavBar from "@/components/NavBar";

export default function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trigger the animation
    setIsAnimating(true);

    // Reset the animation after 0.6s (duration of the animation)
    setTimeout(() => setIsAnimating(false), 600);

    if (!formData.email) {
      setError({ ...error, email: "Email Field is Required" });
      return;
    }
    if (!formData.password) {
      setError({ ...error, password: "Password Field is required" });
      return;
    }

    const res = await login_me(formData);
    if (res.success) {
      var expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      Cookies.set("token", res?.finalData?.token, { expires: expirationDate });
      localStorage.setItem("user", JSON.stringify(res?.finalData?.user));
      dispatch(
        setUserData(
          localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : null
        )
      );
      Router.push("/");
    } else {
      toast.error(res.message);
    }
  };

  useEffect(() => {
    if (Cookies.get("token")) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-full h-screen bg-gradient-to-br from-gray-800 to-black text-white futuristic-bg">
        <div className="flex flex-col items-center text-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full bg-black bg-opacity-70 rounded-lg shadow-lg neon-shadow sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white glowing-text">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div className="text-left">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium glowing-label"
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
                    className="bg-gray-900 border border-gray-700 text-white sm:text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-all duration-300 w-full p-2.5 neon-input"
                    placeholder="name@company.com"
                    required=""
                  />
                  {error.email && (
                    <p className="text-sm text-red-500">{error.email}</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium glowing-label"
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
                    placeholder="••••••••"
                    className="bg-gray-900 border border-gray-700 text-white sm:text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-all duration-300 w-full p-2.5 neon-input"
                    required=""
                  />
                  {error.password && (
                    <p className="text-sm text-red-500">{error.password}</p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-900 focus:ring-3 focus:ring-cyan-500"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-400"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    href="/auth/forget-password"
                    className="text-sm font-medium text-cyan-400 hover:text-cyan-600 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className={`w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ${
                    isAnimating ? "animate-glow" : ""
                  } focus:ring-4 focus:ring-cyan-500 focus:outline-none`}
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/auth/register"
                    className="font-medium text-cyan-400 hover:text-cyan-600 transition-colors"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

      <style jsx>{`
        .futuristic-bg {
          background: radial-gradient(circle at top left, #1a1a2e, #16213e);
        }

        .neon-input {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
        }

        .neon-shadow {
          box-shadow: 0px 4px 15px rgba(0, 255, 255, 0.5);
        }

        .glowing-text {
          color: #00d4ff;
          text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff;
        }

        .glowing-label {
          color: #00e0ff;
          text-shadow: 0 0 8px #00e0ff;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #00d4ff;
          }
          50% {
            box-shadow: 0 0 20px #00d4ff;
          }
          100% {
            box-shadow: 0 0 5px #00d4ff;
          }
        }

        .animate-glow {
          animation: glow 0.6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
