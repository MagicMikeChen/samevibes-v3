import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import ProfileForm from './ProfileForm';
import PostContent from './PostContent';
import { translateMaker } from '../../../src/utils';
import { toTopVariants, fadeInVariants } from '../../common/AniVarients';
import { RootState } from '../../../store/reducers';
import { getProfilePosts } from '../../../store/actionCreators/postAction';
import UserInfo from './UserInfo';
import { ICurUser } from '../../../store/reducerTypes';
import { FaUserEdit, FaUserFriends, FaComments } from 'react-icons/fa';

interface UserProps {
  userProfile: ICurUser;
  isNotHome: boolean;
  isProfile?: boolean;
}
const User: React.FC<UserProps> = (props) => {
  const { isNotHome = false, isProfile } = props;
  const { userAvatar, userName, userId } = props.userProfile;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfilePosts(userId));
  }, [userId]);

  const profilePosts = useSelector(
    (state: RootState) => state.postsState.profilePosts
  );

  const router = useRouter();
  const t = translateMaker(router);

  const scrollToTop = () => {
    document.getElementById('scroller').scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  const [isSticky, setSticky] = useState(false);
  const handleEnter = () => {
    console.log('handleEnter true')
    setSticky(false);
  };
  const handleLeave = () => {
    console.log('handleEnter false')

    setSticky(true);
  };
  return (
    <React.Fragment>
      <AnimatePresence>
        {isSticky && (
          <motion.div
            aria-label="Breadcrumb"
            className={`cs-navbar-style-light dark:cs-navbar-style-dark fixed top-[60px] z-10 flex justify-between px-2 lg:px-16 `}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fadeInVariants}
          >
            <div className="flex cursor-pointer" onClick={scrollToTop}>
              <div className="relative my-1 h-12 w-12 content-center items-center justify-center">
                <Image
                  className="rounded-full"
                  src={userAvatar}
                  alt="me"
                  layout="fill"
                  // width={120}
                  // height={120}
                  objectFit="cover"
                />
              </div>
              <div className="ml-4 flex items-center">{userName}</div>
            </div>
            <div>
              <div className={`my-2 flex flex-row justify-between`}>
                {isProfile ? (
                  <div className="cs-btn-border-style mx-2 flex items-center">
                    <FaUserEdit className="icon-common mr-2 "></FaUserEdit>
                    <div></div>
                    <div className="">{t['txt-edit-profile']}</div>
                  </div>
                ) : (
                  <div className="cs-btn-border-style mx-2 flex items-center">
                    <FaUserFriends className="icon-common mr-2 "></FaUserFriends>
                    <div></div>
                    <div className=""> {t['txt-add-friend']}</div>
                  </div>
                )}
                {/* <div className="flex mx-2 cs-btn-border-style items-center">
                  <FaComments
                    className="icon-common mr-2"
                  ></FaComments>
                  <div></div>
                  {t['txt-message']}
                </div> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        id="scroller"
        className="no-scrollbar container mx-auto h-full overflow-y-auto pt-16"
      >
        <div className="flex-col pt-4">
          {/* <ProfileForm /> */}
          <motion.div
            className="cs-block-style-white-theme dark:cs-block-style-grey-900 text-grey-900 mb-4 flex-col dark:text-white"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={fadeInVariants}
          >
            <div className="flex flex-col items-center">
              <div className="relative my-4 h-32 w-32 2xl:h-40 2xl:w-40">
                <Image
                  className="rounded-full"
                  src={userAvatar}
                  alt="me"
                  layout="fill"
                  // width={120}
                  // height={120}
                  objectFit="cover"
                />
              </div>
              <div className="mt-2 text-center text-lg font-medium">
                {userName}
              </div>
              <Waypoint onEnter={handleEnter} onLeave={handleLeave} />
              <div className={`my-4 flex flex-row text-center`}>
                {isProfile ? (
                  <div className="cs-btn-border-style mx-2 flex items-center">
                    <FaUserEdit className="icon-common mr-2 "></FaUserEdit>
                    <div></div>
                    <div className="">{t['txt-edit-profile']}</div>
                  </div>
                ) : (
                  <div className="cs-btn-border-style mx-2 flex items-center">
                    <FaUserFriends className="icon-common mr-2 "></FaUserFriends>
                    <div></div>
                    <div className=""> {t['txt-add-friend']}</div>
                  </div>
                )}
                {/* <div className="flex items-center mx-2 cs-btn-border-style">
              <FaComments
                    className="icon-common mr-2"
                  ></FaComments>
                  <div></div>
                  {t['txt-message']}
                </div> */}
              </div>
            </div>
          </motion.div>

          <div className="mt-2 flex flex-col justify-between lg:flex-row">
            <UserInfo userProfile={props.userProfile}></UserInfo>
            <div className="mt-4 flex-col pb-20 lg:ml-4 lg:mt-0 lg:w-7/12">
              <motion.div
                className="cs-block-style-white-theme dark:cs-block-style-grey-900"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={toTopVariants}
              >
                <div className="flex flex-col">
                  <div className="p-4">{t['txt-posts']}</div>
                  {profilePosts.map((postItem) => {
                    return (
                      <div key={postItem.postId} className="mb-4">
                        <PostContent
                          postItem={postItem}
                          isNotHome={isNotHome}
                          scrollToTop={scrollToTop}
                        ></PostContent>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default User;
