import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import {Image} from "next/image";
import Router from "next/router";
import { login_me } from "@/Services/auth";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUserData } from "@/Utils/UserSlice";
import styles from "../../styles/Login.module.css";

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
        <Link
          href={"/"}
          className="absolute top-0 left-[5px] sm:top-0 sm:left-0" 
        >
          <img src="/Jobsewa_logo.png" alt="JobSewa Logo"  
          className="h-[35px] w-[35px] sm:h-[6vw] sm:w-[6vw]" />
        </Link>
        <div className={styles.container}>
          <Link
            href={"/"}
            className="absolute left-[2%] top-[2%] min-[769px]:left-[51%] w-[35px] h-[35px]" 
          >
            <img src="/back-arrow.svg" alt="back arrow"  
            className="" />
          </Link>
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
