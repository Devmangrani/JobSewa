import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { setUserData } from "@/Utils/UserSlice";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function NavBar() {
  const dispatch = useDispatch();
  const router = useRouter();  // useRouter to get current path

  const [openJobs, setOpenJobs] = useState(false);

  useEffect(() => {
    dispatch(
      setUserData(
        localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user"))
          : null
      )
    );
  }, [dispatch]);

  const user = useSelector((state) => state.User.userData);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, isScrolled] = useState(false);
  const hamburgerRef = React.useRef(null);

  const useOutsideClick = (callback, exceptions) => {
    const ref = React.useRef();

    React.useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && 
          !ref.current.contains(event.target) &&
          !exceptions.some((exception) => exception.current.contains(event.target))
        ) {
          callback();
        }
      };

      document.addEventListener("click", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    }, [ref, exceptions]);

    return ref;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        isScrolled(true);
      } else {
        isScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 20) {
          isScrolled(true);
        } else {
          isScrolled(false);
        }
      });
    };
  }, [scrolled]);

  const handleLogout = async () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    router.reload();
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside, [hamburgerRef]);

  return (
    <>
      <div
        className={`w-full ${
          scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
        } px-6 h-16 text-white flex items-center justify-between fixed top-0 left-0 z-50 shadow-md transition-all duration-300`}
      >
        <div className="px-2 h-full flex items-center justify-center">
          <p className="lowercase font-semibold tracking-widest text-lg">
            <Link
              href={"/"}
              className="px-3 mx-4 text-2xl "
            >
            <img src="/Jobsewa_logo.png" alt="JobSewa Logo"  
            className="h-[6vw] w-[6vw]" />
            </Link>
          </p>
        </div>
        <div className="px-2 h-full hidden items-center justify-center lg:flex">
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
              className={`
                px-3 mx-2 text-base font-medium uppercase text-black
                relative overflow-hidden group
                transition-all duration-300 ease-in-out
                ${router.pathname === item.href ? "text-sky-500 font-bold" : ""}
              `}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {item.label}
              </span>
              <span className="
                absolute inset-0 bg-black rounded-full
                transform scale-0 group-hover:scale-100
                transition-transform duration-300 ease-out
                origin-center
              "></span>
            </Link>
          ))}
        </div>

        <div className="px-2 h-full hidden items-center justify-center lg:flex space-x-4">
          {user !== null ? (
            <>
              <BiLogOut
                onClick={handleLogout}
                className="cursor-pointer text-black text-3xl hover:text-red-500 transition-all duration-700"
              />
              <p className="text-lg px-4 font-semibold text-sky-700">{user?.name}</p>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                href={"/auth/login"}
                className="
                  px-3 mx-2 text-base font-medium uppercase text-black
                  relative overflow-hidden group
                  transition-all duration-300 ease-in-out
                "
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Log in
                </span>
                <span className="
                  absolute inset-0 bg-black rounded-full
                  transform scale-0 group-hover:scale-100
                  transition-transform duration-300 ease-out
                  origin-center
                "></span>
              </Link>
              <Link
                href={"/auth/register"}
                className="
                  px-3 mx-2 border rounded uppercase
                  tracking-widest
                  font-semibold text-base text-black
                  relative overflow-hidden group
                  transition-all duration-300 ease-in-out
                "
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  SIGN IN
                </span>
                <span className="
                  absolute inset-0 bg-black rounded-full
                  transform scale-0 group-hover:scale-100
                  transition-transform duration-300 ease-out
                  origin-center
                "></span>
              </Link>
            </div>
          )}
        </div>

        <div className="flex lg:hidden px-2 py-2">
          <GiHamburgerMenu
            className="text-4xl text-black cursor-pointer"
            onClick={() => setIsOpen((state) => !state)}
          />
        </div>

        {isOpen && (
          <div
            ref={hamburgerRef}
            className="flex w-full py-2 animate-fade-in-down bg-white/80 backdrop-blur-md transition-all fade duration-1000 absolute top-16 left-0 items-center justify-center flex-col shadow-lg"
          >
            <div className="px-2 h-full flex items-center justify-center flex-col py-2">
              <Link
                href={"/"}
                onClick={() => setIsOpen(false)}
                className={`
                  px-3 m-4 text-base font-medium uppercase text-black
                  relative overflow-hidden group
                  transition-all duration-300 ease-in-out
                  ${router.pathname === "/" ? "text-sky-500 font-bold" : ""}
                `}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Home
                </span>
                <span className="
                  absolute inset-0 bg-black rounded-full
                  transform scale-0 group-hover:scale-100
                  transition-transform duration-300 ease-out
                  origin-center
                "></span>
              </Link>
              <button
                onClick={() => setOpenJobs((state) => !state)}
                className="
                  px-3 m-4 text-base font-medium uppercase text-black
                  flex items-center justify-center
                  relative overflow-hidden group
                  transition-all duration-300 ease-in-out
                "
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center">
                  Jobs {openJobs ? <AiFillCaretUp className="ml-1" /> : <AiFillCaretDown className="ml-1" />}
                </span>
                <span className="
                  absolute inset-0 bg-black rounded-full
                  transform scale-0 group-hover:scale-100
                  transition-transform duration-300 ease-out
                  origin-center
                "></span>
              </button>

              {openJobs && (
                <>
                  <Link
                    href={"/frontend/displayJobs"}
                    onClick={() => setIsOpen(false)}
                    className={`
                      px-3 m-4 text-base font-medium uppercase text-black
                      relative overflow-hidden group
                      transition-all duration-300 ease-in-out
                      ${router.pathname === "/frontend/displayJobs" ? "text-sky-500 font-bold" : ""}
                    `}
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      View Jobs
                    </span>
                    <span className="
                      absolute inset-0 bg-black rounded-full
                      transform scale-0 group-hover:scale-100
                      transition-transform duration-300 ease-out
                      origin-center
                    "></span>
                  </Link>
                  <Link
                    href={"/frontend/postAJob"}
                    onClick={() => setIsOpen(false)}
                    className={`
                      px-3 m-4 text-base font-medium uppercase text-black
                      relative overflow-hidden group
                      transition-all duration-300 ease-in-out
                      ${router.pathname === "/frontend/postAJob" ? "text-sky-500 font-bold" : ""}
                    `}
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Post Jobs
                    </span>
                    <span className="
                      absolute inset-0 bg-black rounded-full
                      transform scale-0 group-hover:scale-100
                      transition-transform duration-300 ease-out
                      origin-center
                    "></span>
                  </Link>
                  <Link
                    href={"/frontend/postedJob"}
                    onClick={() => setIsOpen(false)}
                    className={`
                      px-3 m-4 text-base font-medium uppercase text-black
                      relative overflow-hidden group
                      transition-all duration-300 ease-in-out
                      ${router.pathname === "/frontend/postedJob" ? "text-sky-500 font-bold" : ""}
                    `}
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Posted Jobs
                    </span>
                    <span className="
                      absolute inset-0 bg-black rounded-full
                      transform scale-0 group-hover:scale-100
                      transition-transform duration-300 ease-out
                      origin-center
                    "></span>
                  </Link>
                </>
              )}
              <Link
                href={"/frontend/dashboard"}
                onClick={() => setIsOpen(false)}
                className={`
                  px-3 m-4 text-base font-medium uppercase text-black
                  relative overflow-hidden group
                  transition-all duration-300 ease-in-out
                  ${router.pathname === "/frontend/dashboard" ? "text-sky-500 font-bold" : ""}
                `}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Dashboard
                </span>
                <span className="
                  absolute inset-0 bg-black rounded-full
                  transform scale-0 group-hover:scale-100
                  transition-transform duration-300 ease-out
                  origin-center
                "></span>
              </Link>
              <Link
                href={"/frontend/organizations"}
                onClick={() => setIsOpen(false)}
                className={`
                  px-3 m-4 text-base font-medium uppercase text-black
                  relative overflow-hidden group
                  transition-all duration-300 ease-in-out
                  ${router.pathname === "/frontend/organizations" ? "text-sky-500 font-bold" : ""}
                `}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Organizations
                </span>
                <span className="
                  absolute inset-0 bg-black rounded-full
                  transform scale-0 group-hover:scale-100
                  transition-transform duration-300 ease-out
                  origin-center
                "></span>
              </Link>
            </div>
            <div className="px-2 h-full items-center justify-center flex">
              {user !== null ? (
                <>
                  <BiLogOut
                    onClick={handleLogout}
                    className="cursor-pointer text-black text-3xl hover:text-red-500 transition-all duration-700"
                  />
                  <p className="text-lg px-4 font-semibold text-sky-700">{user?.name}</p>
                </>
              ) : (
                <>
                  <Link
                    href={"/auth/login"}
                    className="
                      px-3 mx-2 text-base font-medium uppercase text-black
                      relative overflow-hidden group
                      transition-all duration-300 ease-in-out
                    "
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Log in
                    </span>
                    <span className="
                      absolute inset-0 bg-black rounded-full
                      transform scale-0 group-hover:scale-100
                      transition-transform duration-300 ease-out
                      origin-center
                    "></span>
                  </Link>
                  <Link
                    href={"/auth/register"}
                    className="
                      px-3 mx-2 border rounded uppercase
                      tracking-widest
                      font-semibold text-base text-black
                      relative overflow-hidden group
                      transition-all duration-300 ease-in-out
                    "
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      SIGN IN
                    </span>
                    <span className="
                      absolute inset-0 bg-black rounded-full
                      transform scale-0 group-hover:scale-100
                      transition-transform duration-300 ease-out
                      origin-center
                    "></span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
