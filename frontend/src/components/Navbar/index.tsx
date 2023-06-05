import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink, Element } from "react-scroll";
import { MenuItems } from "../../common/NavbarConfigs";
import { useTheme } from "next-themes";
import { translateMaker, changeLanguage } from "../../utils";
import LangSelector from "./LangSelector";
import Settings from "./Settings";
import DropdownMenu from "./DropdownMenu";
import LoginButton from "./LoginButton";
const Navbar = () => {
  const router = useRouter();
  const t = translateMaker(router);

  return (
    <div
      id="sv: v3.0.0"
      className="fixed left-0 right-0 top-0 z-30 w-full text-white"
    >
      <nav
        aria-label="Breadcrumb"
        className="cs-navbar-style-light dark:cs-navbar-style-dark flex justify-between px-8 lg:px-16"
      >
        <div className="py-4">
          <div className="cs-gradient-logo-style-light dark:cs-gradient-logo-style-dark text-xl font-semibold">
            SameVibes
          </div>
        </div>
        <div className="flex">
          {/* <div className="flex lg:hidden items-center content-center justify-center">
            <FontAwesomeIcon
              icon={['fas', 'bars']}
              className="icon-common  w-8 h-8"
            ></FontAwesomeIcon>
          </div> */}
          <div className="hidden lg:flex">
            <ol
              role="list"
              className="flex max-w-2xl items-center space-x-2 divide-x py-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {MenuItems?.length !== 0 &&
                MenuItems.map((item, i) => {
                  return (
                    <li key={item.label} className="pl-8">
                      <div className="flex items-center">
                        <Link href={item.url}>
                          <a
                            href="#"
                            className={`mr-6 text-lg font-medium hover:text-gray-900 hover:dark:text-white ${
                              router.pathname === item.url
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-400 dark:text-gray-400"
                            }`}
                          >
                            {t[item.label]}
                          </a>
                        </Link>
                      </div>
                    </li>
                  );
                })}
            </ol>

            <div className="flex items-center justify-center">
              <LoginButton></LoginButton>
              <DropdownMenu></DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
