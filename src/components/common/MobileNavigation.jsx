import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const headerLinks = [
  {
    id: 398439,
    name: "Homepage",
    url: "/",
  },
  {
    id: 687674,
    name: "About Doodle Dongs",
    url: "/",
  },
  {
    id: 456455,
    name: "Mint",
    url: "/",
  },
];
const mobileSocial = [
  {
    id: 9823423,
    icon: "simple-icons_opensea (1).svg",
    path: "#",
  },
  {
    id: 5756455,
    icon: "Group 13 (2).svg",
    path: "#",
  },
  {
    id: 4898955,
    icon: "akar-icons_twitter-fill (2).svg",
    path: "#",
  },
  {
    id: 5335544,
    icon: "akar-icons_medium-fill (3).svg",
    path: "#",
  },
];

function MobileNavigation({ openValue, close }) {
  return (
    <div
      aria-label="Mobile navigation"
      className={`bg-black-700 fixed top-0 left-0 right-0 bottom-0 duration-300 z-50 ${
        openValue
          ? "visible opacity-100 bg-opacity-50"
          : "invisible opacity-0 bg-opacity-100"
      }`}
    >
      <div
        className={`duration-300 ${
          openValue ? "translate-y-0" : "-translate-y-[100%]"
        }`}
      >
        <div className="bg-black-600 px-8 py-16 relative">
          <div className="absolute right-7 top-9">
            <Button onClick={close} className="px-4">
              <img src="/images/Group 80.svg" alt="" />
            </Button>
          </div>
          <ul className="list-none flex flex-col gap-20 mb-32">
            {headerLinks.map(({ id, name, url }) => (
              <li key={id}>
                <Link to={url} className="font-bold text text-black-0">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 justify-between mb-7 px-4">
            {mobileSocial.map(({ id, icon, url }) => (
              <a href="#" key={id}>
                <img
                  width="47"
                  height="47"
                  src={`/images/${icon}`}
                  alt=""
                  className="opacity-60"
                />
              </a>
            ))}
          </div>
          <div className="-mx-1">
            <Button url="/" text="CONNECT WALLET" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;
