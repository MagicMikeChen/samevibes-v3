import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Collapse } from 'react-collapse';
import { navItemMoveInVariants } from '../../common/AniVarients';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { translateMaker, changeLanguage } from '../../utils';

export const MenuItem = ({ i, toggle, item }) => {
  const curRoute = useRouter();
  const t = translateMaker(curRoute);

  return (
    <motion.div className="mb-8 flex" variants={navItemMoveInVariants}>
      {
        <Link href={item.url}>
          <a>
            <div
              className={`h6 w-full px-4 py-2 ${
                curRoute.pathname === item.url
                  ? 'h6 w-full cursor-pointer border-l-4 font-medium  text-mgray-100 hover:text-mgray-100'
                  : 'h6 w-full cursor-pointer font-medium text-mgray-500  hover:text-mgray-100'
              }`}
              onClick={toggle}
            >
              {t[item.label]}
            </div>
          </a>
        </Link>
      }
    </motion.div>
  );
};
