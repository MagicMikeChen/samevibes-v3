import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import FriendsList from "../../src/components/FriendsList";
import PostContent from "../components/shared/PostContent";
import { fetchPosts } from "../../store/actionCreators/postAction";
import { RootState } from "../../store/reducers";
import { toTopVariants, toLeftVariants } from "../common/AniVarients";
import { demoPosts } from "../../fakeData/fakePosts";
import postsApi from "../../pages/api/postsApi";

const Homepage = () => {
  const dispatch = useDispatch();

  const getPosts = async () => {
    try {
      const res = await postsApi.getPosts();
      dispatch(fetchPosts(res.data));
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    // dispatch(fetchPosts(demoPosts));
    getPosts();
  }, []);

  const postsState = useSelector((state: RootState) => state.postsState);

  return (
    <div className="container-1 no-scrollbar mx-auto h-full overflow-y-auto lg:overflow-y-hidden">
      <div className="flex-col">
        {/* <ProfileForm/> */}
        <div className="flex flex-col-reverse justify-between lg:flex-row">
          <div className="flex-col lg:w-8/12">
            <div className="md:cs-post-scroll-height no-scrollbar pb-20 pt-20 lg:overflow-y-auto">
              {postsState.posts.map((postItem) => {
                return (
                  <motion.div
                    key={`${postItem._id} post`}
                    className="mb-4"
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={toTopVariants}
                  >
                    <PostContent
                      postItem={postItem}
                      isNotHome={false}
                    ></PostContent>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="h-full flex-col pt-4 lg:w-4/12">
            <motion.div
              className="mt-16"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={toLeftVariants}
            >
              <FriendsList></FriendsList>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
