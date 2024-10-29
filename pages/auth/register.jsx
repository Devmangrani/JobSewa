import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register_me } from "@/Services/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import styles from "../../styles/Login.module.css";

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("token")) {
      router.push("/");
    }
  }, [router]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
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
      <div className={styles.pageContainer}>
        <Link href="/" className={styles.backToHome}>
          &#8592; Back to Home
        </Link>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <h1>Welcome Aboard!</h1>
            <img
              src="/login-hero.svg"
              alt="Register Hero"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.rightSection}>
            <div className={styles["login-box"]}>
              <h2>Create your account</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles["form-group"]}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required=""
                  />
                  {error.name && (
                    <p className={styles["error-message"]}>{error.name}</p>
                  )}
                </div>
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
                <button type="submit" className={styles["submit-btn"]}>
                  Sign Up
                </button>
                <p className={styles["sign-up"]}>
                  Already have an account?{" "}
                  <Link href="/auth/login">Sign in</Link>
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
