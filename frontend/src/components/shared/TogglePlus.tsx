import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => {
  return <motion.path fill={props.color} {...props} />;
};
const pathRotateVariants = {
  closed: {
    opacity: 1,
    rotate: 0,
  },
  open: {
    opacity: 1,
    rotate: 90,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
const TogglePlus = ({color}) => {
  return (
      <svg height="100%" width="100%" viewBox="0 0 20 20">
        <Path
          color={color}
          variants={pathRotateVariants}
          d="M10,2.5c0.3,0,0.6,0.3,0.6,0.6v13.8c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6V3.1C9.4,2.8,9.7,2.5,10,2.5z"
        />
        <Path color={color} d="M2.5,10c0-0.3,0.3-0.6,0.6-0.6h13.8c0.3,0,0.6,0.3,0.6,0.6s-0.3,0.6-0.6,0.6H3.1C2.8,10.6,2.5,10.3,2.5,10z" />
      </svg>

  );
};
export default TogglePlus;
