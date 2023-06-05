import React, { useState, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import handler from '../../../pages/api/hello';
import { IoSettingsSharp } from 'react-icons/io5';
import ThemeSelector from './ThemeSelector';
import LangSelector from './LangSelector'

const DropdownMenu = () => {
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(!hovered);
  };
  const curRoute = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  // useEffect(() => {
  //   if (
  //     curRoute.pathname === '/bodymap' ||
  //     curRoute.pathname === '/acumap' ||
  //     curRoute.pathname === '/digitwin'
  //   ) {
  //     setShowDropdown(true);
  //   } else {
  //     setShowDropdown(false);
  //   }
  // }, [curRoute.pathname]);
  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="relative ml-4 px-2 h-full flex items-center">
      <div
        className={`h6 flex cursor-pointer justify-center items-center text-mgray-400 cs-border-btn-t-100 rounded-xl px-2 py-1`}
        onClick={handleShowDropdown}
      >
        <div
          className={`flex text-lg font-medium items-center transition-colors duration-300 hover:text-gray-600 dark:hover:text-white ${
            showDropdown
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-400 dark:text-gray-400 '
          }`}
          
        >
          <IoSettingsSharp className="cursor-pointer text-xl mr-1 "></IoSettingsSharp>
          Setting 
        </div>
      </div>
      <div
        className={``}
      >
        <ul className={`dropdown-menu absolute w-[160px] h6 right-0 top-[60px] ${showDropdown ? 'block' : 'hidden'} bg-white dark:bg-black bg-opacity-20 dark:bg-opacity-30 py-2 text-mgray-400`}>
          <div
            className={`h6 flex cursor-pointer justify-center py-4 text-white`}
          >
            <LangSelector cbCloseFunc={handleShowDropdown}></LangSelector>
          </div>
          <div
            className={`h6 flex cursor-pointer justify-center py-4 text-white px-2`}
          >
            <ThemeSelector cbCloseFunc={handleShowDropdown}></ThemeSelector>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
