import React from "react";
import { motion } from "framer-motion";
import { dropIn } from "../common/AniVarients";
import { useRouter } from 'next/router'

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="bg-basic container-0 flex h-screen flex-col items-center justify-center ">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={dropIn}
      >
        <img
          className="w-[144px] md:w-[200px]"
          src="/img/img-404.svg"
          alt="404"
        />
      </motion.div>
      <div className="h4 md:h2 mt-4 text-mgray-900">Page Not Found</div>
      <div className="h6 md:h5 mt-6 max-w-[632px] text-center text-mgray-500">
        The page you were looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </div>
      <div
        className="std-btn-lg mt-10 bg-black text-white std-hover-gray-800"
        onClick={() => router.back()}
      >
        Go Back
      </div>
    </div>
  );
};

export default NotFoundPage;
