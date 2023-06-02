import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";

import MenuToggleButton from "./ToggleButton";
import { MenuItem } from "./SideMenuItem";
import { NAVLINK_CONFIGS } from "../../common/NavbarConfigs";
import { fadeInVariants, navStaggerVariants } from "../../common/AniVarients";

export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const SideMenu = ({ routeType }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  return (
    <motion.div
      className="100vh overflow-y-hidden lg:hidden"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      // custom={height}
      // ref={containerRef}
    >
      <motion.div
        className="fixed top-0 right-0 z-30 flex h-screen w-[60vw] flex-col justify-between bg-theme-300 dark:bg-black bg-opacity-90 dark:bg-opacity-80 sm:w-[40vw]"
        variants={sidebar}
      >
        <motion.div variants={navStaggerVariants} className="mt-16">
          {NAVLINK_CONFIGS[routeType].map((item, i) => (
            <MenuItem
              i={i}
              key={`MenuItem-${i}`}
              item={item}
              toggle={toggleOpen}
            />
          ))}
        </motion.div>
        <div className="w-full px-4 pb-5">
          {/* <LoginBtn toggle={toggleOpen}></LoginBtn> */}
          {/* <UserPortalBtn /> */}
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed top-0 left-0 z-10 h-screen w-full bg-black bg-opacity-30`}
            variants={fadeInVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            onClick={() => toggleOpen()}
          ></motion.div>
        )}
      </AnimatePresence>
      <MenuToggleButton toggle={() => toggleOpen()} />
    </motion.div>
  );
};
export default SideMenu;