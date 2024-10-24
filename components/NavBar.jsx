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
          scrolled ? "bg-custom-color shadow-lg backdrop-blur-lg bg-opacity-90" : "bg-custom-color bg-opacity-80"
        } px-6 h-20 bg-gray-600 text-white flex items-center justify-between fixed top-0 left-0 z-50`}
      >
        <div className="px-2 h-full flex items-center justify-center">
          <p className="lowercase font-semibold tracking-widest text-lg">
            <Link
              href={"/"}
              className="px-3 mx-4 text-2xl font-medium transition-all duration-700 hover:translate-y-2 uppercase"
            >
              𝓙ob𝓢𝓮𝔀𝓪
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
              className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 text-glow uppercase ${
                router.pathname === item.href
                  ? "text-sky-100 font-bold border-b-4 border-sky-500" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

{/* //if you want in older format
        <div className="px-2 h-full hidden items-center justify-center lg:flex">
          <Link
            href={"/"}
            className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
              router.pathname === "/" ? "text-sky-100 font-bold border-b-4 border-sky-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href={"/frontend/postAJob"}
            className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
              router.pathname === "/frontend/postAJob"
                ? "ext-sky-100 font-bold border-b-4 border-sky-500"
                : ""
            }`}
          >
            Post Jobs
          </Link>
          <Link
            href={"/frontend/displayJobs"}
            className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
              router.pathname === "/frontend/displayJobs"
                ? "text-sky-200 font-bold"
                : ""
            }`}
          >
            View Jobs
          </Link>
          <Link
            href={"/frontend/postedJob"}
            className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
              router.pathname === "/frontend/postedJob"
                ? "text-sky-100 font-bold border-b-4 border-sky-500"
                : ""
            }`}
          >
            Posted Jobs
          </Link>
          <Link
            href={"/frontend/dashboard"}
            className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
              router.pathname === "/frontend/dashboard"
                ? "text-sky-100 font-bold border-b-4 border-sky-500"
                : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            href={"/frontend/organizations"}
            className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
              router.pathname === "/frontend/organizations"
                ? "text-sky-100 font-bold border-b-4 border-sky-500"
                : ""
            }`}
          >
            Organizations
          </Link>
        </div> */}

        <div className="px-2 h-full hidden items-center justify-center lg:flex space-x-4">
          {user !== null ? (
            <>
              <BiLogOut
                onClick={handleLogout}
                className="cursor-pointer text-3xl hover:text-red-500 transition-all duration-700"
              />
              <p className="text-lg px-4 font-semibold">{user?.name}</p>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                href={"/auth/login"}
                className="px-4 py-2 border border-white rounded-md uppercase tracking-widest mx-4 transition-all duration-200 hover:bg-sky-200 font-semibold text-base hover:text-sky-700"
              >
                Login
              </Link>
              <Link
                href={"/auth/register"}
                className="px-4 py-2 bg-sky-200 border border-sky-700 text-sky-700 rounded-md uppercase tracking-widest mx-4 transition-all duration-200 hover:bg-white font-semibold text-base hover:text-sky-700 hover:border-sky-500"
              >
                REGISTER
              </Link>
            </div>
          )}
        </div>

        <div className="flex lg:hidden  px-2 py-2 ">
          <GiHamburgerMenu
            className="text-4xl"
            onClick={() => setIsOpen((state) => !state)}
          />
        </div>

        {isOpen && (
          <div
            ref={hamburgerRef}
            className="flex w-full py-2 animate-fade-in-down bg-indigo-600 transition-all fade duration-1000 absolute top-20 left-0 items-center justify-center flex-col"
          >
            <div className="px-2 h-full flex items-center justify-center flex-col py-2">
              <Link
                href={"/"}
                onClick={() => setIsOpen(false)}
                className={`px-3  m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
                  router.pathname === "/" ? "text-sky-100 font-bold border-b-4 border-sky-500" : ""
                }`}
              >
                Home
              </Link>
              <button
                onClick={() => setOpenJobs((state) => !state)}
                className="px-3  m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase flex items-center justify-center"
              >
                Jobs {openJobs ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </button>

              {openJobs && (
                <>
                  <Link
                    href={"/frontend/displayJobs"}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
                      router.pathname === "/frontend/displayJobs"
                        ? " text-sky-100 font-bold border-b-4 border-sky-500"
                        : ""
                    }`}
                  >
                    View Jobs
                  </Link>
                  <Link
                    href={"/frontend/postAJob"}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
                      router.pathname === "/frontend/postAJob"
                        ? "text-sky-100 font-bold border-b-4 border-sky-500"
                        : ""
                    }`}
                  >
                    Post Jobs
                  </Link>
                  <Link
                    href={"/frontend/postedJob"}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
                      router.pathname === "/frontend/postedJob"
                        ? "text-sky-100 font-bold border-b-4 border-sky-500"
                        : ""
                    }`}
                  >
                    Posted Jobs
                  </Link>
                </>
              )}
              <Link
                href={"/frontend/dashboard"}
                onClick={() => setIsOpen(false)}
                className={`px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
                  router.pathname === "/frontend/dashboard"
                    ? "text-sky-100 font-bold border-b-4 border-sky-500"
                    : ""
                }`}
              >
                Dashboard
              </Link>
              <Link
                href={"/frontend/organizations"}
                onClick={() => setIsOpen(false)}
                className={`px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
                  router.pathname === "/frontend/organizations"
                    ? "text-sky-100 font-bold border-b-4 border-sky-500"
                    : ""
                }`}
              >
                Organizations
              </Link>
            </div>
            <Link
  href={"/about"}
  className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
    router.pathname === "/about" ? "text-sky-200 font-bold" : ""
  }`}
>
  About
</Link>

            <div className="px-2 h-full  items-center justify-center flex">
              {user !== null ? (
                <>
                  <BiLogOut
                    onClick={handleLogout}
                    className="cursor-pointer text-3xl hover:text-red-500 transition-all duration-700"
                  />
                  <p className="text-lg px-4 font-semibold">{user?.name}</p>
                </>
              ) : (
                <>
                  <Link
                    href={"/auth/login"}
                    className="px-4 py-2 border border-white rounded uppercase tracking-widest mx-4 transition-all duration-700 hover:bg-white font-semibold text-base hover:text-sky-700"
                  >
                    Login
                  </Link>
                  <Link
                    href={"/auth/register"}
                    className="px-4 py-2 border border-white rounded uppercase tracking-widest mx-4 text-sky-700 bg-white transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-white"
                  >
                    REGISTER
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

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { BiLogOut } from "react-icons/bi";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { setUserData } from "@/Utils/UserSlice";
// import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

// export default function NavBar() {
//   const dispatch = useDispatch();
//   const router = useRouter();  // useRouter to get current path

//   const [openJobs, setOpenJobs] = useState(false);

//   useEffect(() => {
//     dispatch(
//       setUserData(
//         localStorage.getItem("user")
//           ? JSON.parse(localStorage.getItem("user"))
//           : null
//       )
//     );
//   }, [dispatch]);

//   const user = useSelector((state) => state.User.userData);
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, isScrolled] = useState(false);
//   const hamburgerRef = React.useRef(null);

//   const useOutsideClick = (callback, exceptions) => {
//     const ref = React.useRef();

//     React.useEffect(() => {
//       const handleClick = (event) => {
//         if (ref.current && 
//           !ref.current.contains(event.target) &&
//           !exceptions.some((exception) => exception.current.contains(event.target))
//         ) {
//           callback();
//         }
//       };

//       document.addEventListener("click", handleClick, true);

//       return () => {
//         document.removeEventListener("click", handleClick, true);
//       };
//     }, [ref, exceptions]);

//     return ref;
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 20) {
//         isScrolled(true);
//       } else {
//         isScrolled(false);
//       }
//     });
//     return () => {
//       window.removeEventListener("scroll", () => {
//         if (window.scrollY > 20) {
//           isScrolled(true);
//         } else {
//           isScrolled(false);
//         }
//       });
//     };
//   }, [scrolled]);

//   const handleLogout = async () => {
//     Cookies.remove("token");
//     localStorage.removeItem("user");
//     router.reload();
//   };

//   const handleClickOutside = () => {
//     setIsOpen(false);
//   };

//   const ref = useOutsideClick(handleClickOutside, [hamburgerRef]);

//   return (
//     <>
//       <div
//         className={`w-full ${
//           scrolled ? "bg-custom-color" : "bg-custom-color"
//         } px-6 h-20 bg-gray-600 text-white flex items-center justify-between fixed top-0 left-0 z-50`}
//       >
//         <div className="px-2 h-full flex items-center justify-center">
//           <p className="lowercase font-semibold tracking-widest text-lg">
//             <Link
//               href={"/"}
//               className="px-3 mx-4 text-2xl font-medium transition-all duration-700 hover:translate-y-2 uppercase"
//             >
//               𝓙ob𝓢𝓮𝔀𝓪
//             </Link>
//           </p>
//         </div>

//         <div className="px-2 h-full hidden items-center justify-center lg:flex">
//           <Link
//             href={"/"}
//             className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//               router.pathname === "/" ? "text-sky-200 font-bold" : ""
//             }`}
//           >
//             Home
//           </Link>
//           <Link
//             href={"/frontend/postAJob"}
//             className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//               router.pathname === "/frontend/postAJob"
//                 ? "text-sky-200 font-bold"
//                 : ""
//             }`}
//           >
//             Post Jobs
//           </Link>
//           <Link
//             href={"/frontend/displayJobs"}
//             className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//               router.pathname === "/frontend/displayJobs"
//                 ? "text-sky-200 font-bold"
//                 : ""
//             }`}
//           >
//             View Jobs
//           </Link>
//           <Link
//             href={"/frontend/postedJob"}
//             className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//               router.pathname === "/frontend/postedJob"
//                 ? "text-sky-200 font-bold"
//                 : ""
//             }`}
//           >
//             Posted Jobs
//           </Link>
//           <Link
//             href={"/frontend/dashboard"}
//             className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//               router.pathname === "/frontend/dashboard"
//                 ? "text-sky-200 font-bold"
//                 : ""
//             }`}
//           >
//             Dashboard
//           </Link>
//           <Link
//             href={"/frontend/organizations"}
//             className={`px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//               router.pathname === "/frontend/organizations"
//                 ? "text-sky-200 font-bold"
//                 : ""
//             }`}
//           >
//             Organizations
//           </Link>
//         </div>

//         <div className="px-2 h-full hidden items-center justify-center lg:flex ">
//           {user !== null ? (
//             <>
//               <BiLogOut
//                 onClick={handleLogout}
//                 className="cursor-pointer text-3xl hover:text-red-500 transition-all duration-700"
//               />
//               <p className="text-lg px-4 font-semibold">{user?.name}</p>
//             </>
//           ) : (
//             <>
//               <Link
//                 href={"/auth/login"}
//                 className="px-4 py-2 border border-white rounded uppercase tracking-widest mx-4 transition-all duration-700 hover:bg-white font-semibold text-base hover:text-sky-700"
//               >
//                 Login
//               </Link>
//               <Link
//                 href={"/auth/register"}
//                 className="px-4 py-2 border border-white rounded uppercase tracking-widest mx-4 transition-all duration-700 hover:bg-white font-semibold text-base hover:text-sky-700"
//               >
//                 REGISTER
//               </Link>
//             </>
//           )}
//         </div>

//         <div className="flex lg:hidden  px-2 py-2 ">
//           <GiHamburgerMenu
//             className="text-4xl"
//             onClick={() => setIsOpen((state) => !state)}
//           />
//         </div>

//         {isOpen && (
//           <div
//             ref={hamburgerRef}
//             className="flex w-full py-2 animate-fade-in-down bg-indigo-600 transition-all fade duration-1000 absolute top-20 left-0 items-center justify-center flex-col"
//           >
//             <div className="px-2 h-full flex items-center justify-center flex-col py-2">
//               <Link
//                 href={"/"}
//                 onClick={() => setIsOpen(false)}
//                 className={`px-3  m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//                   router.pathname === "/" ? "text-sky-200 font-bold" : ""
//                 }`}
//               >
//                 Home
//               </Link>
//               <button
//                 onClick={() => setOpenJobs((state) => !state)}
//                 className="px-3  m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase flex items-center justify-center"
//               >
//                 Jobs {openJobs ? <AiFillCaretUp /> : <AiFillCaretDown />}
//               </button>

//               {openJobs && (
//                 <>
//                   <Link
//                     href={"/frontend/displayJobs"}
//                     onClick={() => setIsOpen(false)}
//                     className={`px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//                       router.pathname === "/frontend/displayJobs"
//                         ? "text-sky-200 font-bold"
//                         : ""
//                     }`}
//                   >
//                     View Jobs
//                   </Link>
//                   <Link
//                     href={"/frontend/postAJob"}
//                     onClick={() => setIsOpen(false)}
//                     className={`px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//                       router.pathname === "/frontend/postAJob"
//                         ? "text-sky-200 font-bold"
//                         : ""
//                     }`}
//                   >
//                     Post Jobs
//                   </Link>
//                   <Link
//                     href={"/frontend/postedJob"}
//                     onClick={() => setIsOpen(false)}
//                     className={`px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//                       router.pathname === "/frontend/postedJob"
//                         ? "text-sky-200 font-bold"
//                         : ""
//                     }`}
//                   >
//                     Posted Jobs
//                   </Link>
//                 </>
//               )}
//               <Link
//                 href={"/frontend/dashboard"}
//                 onClick={() => setIsOpen(false)}
//                 className={`px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//                   router.pathname === "/frontend/dashboard"
//                     ? "text-sky-200 font-bold"
//                     : ""
//                 }`}
//               >
//                 Dashboard
//               </Link>
//               <Link
//                 href={"/frontend/organizations"}
//                 onClick={() => setIsOpen(false)}
//                 className={`px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
//                   router.pathname === "/frontend/organizations"
//                     ? "text-sky-200 font-bold"
//                     : ""
//                 }`}
//               >
//                 Organizations
//               </Link>
//             </div>
//             <div className="px-2 h-full  items-center justify-center flex">
//               {user !== null ? (
//                 <>
//                   <BiLogOut
//                     onClick={handleLogout}
//                     className="cursor-pointer text-3xl hover:text-red-500 transition-all duration-700"
//                   />
//                   <p className="text-lg px-4 font-semibold">{user?.name}</p>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     href={"/auth/login"}
//                     className="px-4 py-2 border border-white rounded uppercase tracking-widest mx-4 transition-all duration-700 hover:bg-white font-semibold text-base hover:text-sky-700"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     href={"/auth/register"}
//                     className="px-4 py-2 border border-white rounded uppercase tracking-widest mx-4 text-sky-700 bg-white transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-white"
//                   >
//                     REGISTER
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
