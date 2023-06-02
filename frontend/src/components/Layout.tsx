import type { NextComponentType } from 'next';
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer/Footer';
import ModalController from './Modal/ModalController';
import AudioPlayer from './shared/AudioPlayer';
import { fadeInVariants } from '../common/AniVarients';
import SideMenu from '../components/Navbar/SideMenu';
const Layout: NextComponentType = ({ children }) => {
  const systemState = useSelector((state: RootState) => state.systemReducer);
  const { isShowPlayer } = systemState;
  const isLoginState = useSelector(
    (state: RootState) => state.systemReducer.isLogin
  );
  const routeType = isLoginState ? 'auth' : 'base';

  return (
    <div>
          <Navbar></Navbar>
          <SideMenu routeType={routeType}></SideMenu>
          <ModalController></ModalController>
        <AnimatePresence exitBeforeEnter>
          {isShowPlayer && (
            <motion.div
              className="fixed bottom-0 left-0 z-20 w-full"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={fadeInVariants}
            >
              <AudioPlayer />
            </motion.div>
          )}
        </AnimatePresence>
          <main>{children}</main>

    </div>
  );
};

export default Layout;
