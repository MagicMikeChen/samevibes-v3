import React from "react";
import {
  setPopupModal,
  setLogout,
  setAcessToken
} from "../../../store/actionCreators/systemAction";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/reducers";
import { useRouter } from 'next/router';

const LoginButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.systemReducer);

  const handlePopup = () => {
    dispatch(setPopupModal("login"));
  };
  const handleLogout = () => {
    dispatch(setLogout());
    dispatch(setAcessToken(''))
    router.push('/');
  };
  return isLogin ? (
    <div
      className="cs-border-btn-t-100 cursor-pointer rounded-xl px-2 py-1 text-lg font-medium text-gray-400 transition-colors duration-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white"
      onClick={handleLogout}
    >
      Logout
    </div>
  ) : (
    <div
      className="cs-border-btn-t-100 cursor-pointer rounded-xl px-2 py-1 text-lg font-medium text-gray-400 transition-colors duration-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white"
      onClick={handlePopup}
    >
      Login
    </div>
  );
};

export default LoginButton;
