import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { setUserData } from "@/Utils/UserSlice";
import styles from "../styles/Navbar.module.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [openJobs, setOpenJobs] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const hamburgerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    dispatch(setUserData(storedUser ? JSON.parse(storedUser) : null));
  }, [dispatch]);

  const user = useSelector((state) => state.User.userData);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setOpenJobs(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    router.reload();
  };

  const handleLogin = () => {
    router.push("/auth/login");
  };

  const handleSignup = () => {
    router.push("/auth/register");
  };

  return (
    <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/Jobsewa_logo.png" alt="JobSewa Logo" className={styles.logoImg} />
        </Link>
      </div>

      <div className={styles.navLinks}>
        {[
          { href: "/", label: "Home" },
          { href: "/frontend/postAJob", label: "Post Jobs" },
          { href: "/frontend/displayJobs", label: "View Jobs" },
          { href: "/frontend/postedJob", label: "Posted Jobs" },
          { href: "/frontend/dashboard", label: "Dashboard" },
          { href: "/frontend/organizations", label: "Organizations" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${
              router.pathname === item.href ? styles.active : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className={styles.userActions}>
        {user ? (
          <>
            <BiLogOut onClick={handleLogout} className={styles.logoutIcon} />
            <p className={styles.userName}>{user.name}</p>
          </>
        ) : (
          <div className={styles.authLinks}>
            <button className={styles.loginButton} onClick={handleLogin}>
              Log in
            </button>
            <button className={styles.signupButton} onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        )}
      </div>

      <div
        ref={hamburgerRef}
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={`${styles.mobileMenu} ${styles.open}`}
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`${styles.mobileNavItem} ${
              router.pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </Link>
          <button
            onClick={() => setOpenJobs(!openJobs)}
            className={styles.mobileNavItem}
          >
            Jobs {openJobs ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </button>
          {openJobs && (
            <div className={styles.mobileSubMenu}>
              <Link
                href="/frontend/displayJobs"
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavItem}
              >
                View Jobs
              </Link>
              <Link
                href="/frontend/postAJob"
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavItem}
              >
                Post Jobs
              </Link>
              <Link
                href="/frontend/postedJob"
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavItem}
              >
                Posted Jobs
              </Link>
            </div>
          )}
          <Link
            href="/frontend/dashboard"
            onClick={() => setIsOpen(false)}
            className={styles.mobileNavItem}
          >
            Dashboard
          </Link>
          <Link
            href="/frontend/organizations"
            onClick={() => setIsOpen(false)}
            className={styles.mobileNavItem}
          >
            Organizations
          </Link>
        </div>
      )}
    </div>
  );
}
