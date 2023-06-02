import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { translateMaker } from '../../../src/utils';
import { toRightVariants } from '../../common/AniVarients';
import { ICurUser } from '../../../store/reducerTypes';
import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaInstagram,
  FaHeartbeat,
} from 'react-icons/fa';

interface UserInfoProps {
  userProfile: ICurUser;
}
const UserInfo: React.FC<UserInfoProps> = (props) => {
  const router = useRouter();
  const t = translateMaker(router);
  const {
    userIntro,
    userCompany,
    userEducation,
    userLocation,
    userInstagram,
    userRelationship,
    userFavAlbums,
  } = props.userProfile;
  return (
    <React.Fragment>
      <motion.div
        className="flex-col lg:w-5/12"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={toRightVariants}
      >
        <div className="cs-block-style-white-theme dark:cs-block-style-grey-900">
          <div className="w-full p-4 text-center">{userIntro}</div>
        </div>
        <div className="cs-block-style-white-theme dark:cs-block-style-grey-900">
          <div className="flex flex-col p-4">
            <div className="flex items-center">
              <FaBriefcase className="icon-common mr-2 mt-1"></FaBriefcase>
              <div>{userCompany}</div>
            </div>
            <div className="flex items-center">
              <FaGraduationCap className="icon-common mr-2 mt-1"></FaGraduationCap>
              <div>{userEducation}</div>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="icon-common mr-2 mt-1"></FaMapMarkerAlt>
              <div>{userLocation}</div>
            </div>
            <div className="flex items-center">
              <FaInstagram className="icon-common mr-2 mt-1"></FaInstagram>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.instagram.com/${userInstagram}`}
              >
                {userInstagram}
              </a>
            </div>
            <div className="flex items-center">
              <FaHeartbeat className="icon-common mr-2 mt-1"></FaHeartbeat>
              <div>{userRelationship}</div>
            </div>
          </div>
        </div>
        <div className="cs-block-style-white-theme dark:cs-block-style-grey-900 mt-4">
          <div className="flex flex-col p-4">
            <div>{t['txt-favorite-album']}</div>
            <div>
              <div className="mt-4 grid grid-cols-3 grid-rows-3 gap-4">
                {userFavAlbums.map((item, i) => {
                  return (
                    <div key={item.audioTitle} className="relative aspect-square min-w-min">
                      <Image
                        className="rounded-sm"
                        src={`/img/${item.audioImage}.jpeg`}
                        alt={item.audioTitle}
                        layout="fill"
                        // width={120}
                        // height={120}
                        objectFit="cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default UserInfo;
