import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as ScrollLink, Element } from 'react-scroll';
import { MenuItems } from '../../common/NavbarConfigs';
import { useTheme } from 'next-themes';
import { translateMaker, changeLanguage } from '../../utils';
import { setPopupModal } from '../../../store/actionCreators/systemAction';
import LangSelector from './LangSelector';
import Settings from './Settings';
import DropdownMenu from './DropdownMenu';
const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { locale } = router;
  const t = translateMaker(router);

  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  const handlePopup = () => {
    dispatch(setPopupModal('login'));
  };
  return (
    <div
      id="sfs: v1.0.1"
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
                                ? 'text-gray-900 dark:text-white'
                                : 'text-gray-400 dark:text-gray-400'
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

            <div className="flex cursor-pointer items-center justify-center">
              <div className="text-lg font-medium text-gray-400 dark:text-gray-400 cs-border-btn-t-100 rounded-xl px-2 py-1" onClick={handlePopup}>
                Login
              </div>
              <DropdownMenu></DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
