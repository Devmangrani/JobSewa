import { href } from "react-router-dom";

export const Menus = [
  {
    id: 1,
    name: "Aircrafts",
    subMenuHeading: ["Multirotor", "FixedWings"],
    href: "/aircrafts",
    subMenu: [
      {
        id: 1,
        name: "X-MQ650LV",
        desc: "Responsive design",
        href: "/multirotor/1"
      },
      {
        id: 2,
        name: "Project Talon-Q9872MV",
        desc: "Management content",
        href: "/fixedwing/1"
      },
      {
        id: 3,
        name: "MQ750LV",
        desc: "Site control",
        href: "/multirotor/2"
      },
      {
        id: 4,
        name: "Nova Wing-Q3484MXV",
        desc: "Management content",
        href: "/fixedwing/2"
      },
      {
        id: 5,
        name: "X-MQ900",
        desc: "Link pages",
        href: "/multirotor/3"
      },
      {
        id: 6,
        name: "Cipher Flight-QW3289LV",
        desc: "Management content",
        href: "/fixedwing/3"
      },
    ],
    gridCols: 2,
  },

  {
    id: 2,
    name: "Engineering",
    href: "/engineering",
  },

  {
    id: 3,
    name: "Blog",
    href: "/blog",
  },

  {
    id: 4,
    name: "About",
    href: "/about",
  },
];
