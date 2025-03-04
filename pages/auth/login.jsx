import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
//ToastContainer: The place where all toasts appear.
import "react-toastify/dist/ReactToastify.css"; 
//react-toastify: A library for showing pop-up notifications (toasts).
import Link from "next/link";
//Link: A component for creating links to other pages.  
import Router from "next/router";
//Router: A component for routing between pages.
import { login_me } from "@/Services/auth";
//login_me: A function that sends the login request to the backend.
import Cookies from "js-cookie";
//Cookies: A library for managing cookies.
import { useDispatch } from "react-redux";
//useDispatch: A hook for dispatching actions to the Redux store.
import { setUserData } from "@/Utils/UserSlice";
//setUserData: A function that sets the user data in the Redux store.
import styles from "../../styles/Login.module.css";
//styles: A module for styling the login page.

export default function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

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
      <div className={styles.pageContainer}>
        <Link href="/" className={styles.backToHome}>
          &#8592; Back to Home
        </Link>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <h1>Welcome Back!</h1>
            <img
              src="/login-hero.svg"
              alt="Login Hero"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.rightSection}>
            <div className={styles["login-box"]}>
              <h2>Sign in to your account</h2>
              <form onSubmit={handleSubmit} action="#">
                <div className={styles["form-group"]}>
                  <label htmlFor="email">Your email</label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    required=""
                  />
                  {error.email && (
                    <p className={styles["error-message"]}>{error.email}</p>
                  )}
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    required=""
                  />
                  {error.password && (
                    <p className={styles["error-message"]}>{error.password}</p>
                  )}
                </div>
                <div className={styles["remember-container"]}>
                  <div>
                    <input type="checkbox" id="remember" required="" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <Link
                    href="/auth/forget-password"
                    className={styles["forgot-link"]}
                  >
                    Forgot password?
                  </Link>
                </div>
                <button type="submit" className={styles["submit-btn"]}>
                  Sign in
                </button>
                <p className={styles["sign-up"]}>
                  Don’t have an account yet?{" "}
                  <Link href="/auth/register">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
