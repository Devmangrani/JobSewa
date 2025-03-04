import { href } from "react-router-dom";

// export const navItems = [
//   { label: "Aircrafts", href: "/aircrafts",
//     submenu: [ // will be added later on
//       {label: "Multirotors",
//         Innersubmenu1: [
//           {
//             label: "asdsaikhfas", href: "/multirotor/1"
//           }
//         ]
//       },
//       {label: "FixedWings",
//         Innersubmenu2: [
//           {
//             label: "Nova flight-RX232QW", href: "/fixedwing/1"
//           }
//         ]
//       },
//     ]
//    },
//   { label: "Engineering", href: "/engineering" }, //will be added later on
//   // { label: "Services", href: "/services" },
//   { label: "About", href: "/about" }
// ];

export const Menus = [
  {
    name: "Aircrafts",
    subMenuHeading: ["Multirotor", "FixedWings"],
    href: "/aircrafts",
    subMenu: [
      {
        name: "X-MQ650LV",
        desc: "Responsive design",
        href: "/multirotor/1"
      },
      {
        name: "Project Talon-Q9872MV",
        desc: "Management content",
        href: "/fixedwing/1"
      },
      {
        name: "MQ750LV",
        desc: "Site control",
        href: "/multirotor/2"
      },
      {
        name: "Nova Wing-Q3484MXV",
        desc: "Management content",
        href: "/fixedwing/2"
      },
      {
        name: "X-MQ900",
        desc: "Link pages",
        href: "/multirotor/3"
      },
      {
        name: "Cipher Flight-QW3289LV",
        desc: "Management content",
        href: "/fixedwing/3"
      },
    ],
    gridCols: 2,
  },

  {
    name: "Engineering",
    href: "/engineering",
  },

  {
    name: "Blog",
    href: "/blog",
  },

  {
    name: "About",
    href: "/about",
  },
];
