import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dropIn, toBottomFadeOutVariants } from "../../common/AniVarients";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { closePopupModal } from "../../../store/actionCreators/systemAction";
import { IoCloseSharp } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";


export default function Modal({ children, ...props }) {
  const { classNameProps, showCloseBtn = true, showBgCloseBtn = false } = props;
  const isPopupModalShow = useSelector(
    (state: RootState) => state.systemReducer.modal.isPopupModalShow
  );
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closePopupModal());
  };
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isPopupModalShow ? (
          <>
            <div
              className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none`}
            >
              <div
                className="fixed inset-0 z-40 bg-black opacity-50"
              ></div>
              {showBgCloseBtn && (
                <IoCloseSharp
                  className="fixed top-6 right-6 z-40 text-3xl text-white cursor-pointer"
                  onClick={handleCloseModal}
                ></IoCloseSharp>
              )}
              <motion.div
                className={`fixed z-50 mx-auto w-auto bg-mgray-100 shadow-lg md:min-w-[400px] ${classNameProps}`}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={toBottomFadeOutVariants}
              >
                {showCloseBtn && (
                  <div className="relative flex flex-col rounded-lg border-0 outline-none focus:outline-none">
                    <button className="flex justify-end border-0 mx-5 mt-5">
                      <span
                        className="block h-6 w-6 bg-transparent text-2xl text-black outline-none focus:outline-none"
                        onClick={handleCloseModal}
                      >
                        <VscClose></VscClose>
                      </span>
                    </button>
                  </div>
                )}
                {/*content*/}
                {children}
                {/*content*/}
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
