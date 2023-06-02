import React from "react";
import { useDispatch } from "react-redux";
import { closePopupModal } from "../../../store/actionCreators/systemAction";
interface ErrorModalProps {
  classNameProps?: string;
}
const ErrorModal = (props: ErrorModalProps) => {
  const { classNameProps } = props;
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closePopupModal());
  };
  const handleSendSupportEmail = () => {
    window.open("mailto:stopflyingsolo@gmail.com");
  };
  return (
    <div
      className={`flex h-full w-[90vw] max-w-[408px] flex-col items-center justify-center bg-mgray-100 md:max-w-[454px] px-5 py-10 md:px-10 ${classNameProps}`}
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="h5 md:h4 text-black">Oops!</div>
        <div className="h5 md:h4 text-black">Something went wrong.</div>
        <div className="fn-12 md:fn-14 mt-5 md:mt-6 text-mgray-500 text-center">
          Please check your internet connection and try again, or contact us at 
        <span className="fb-12 md:fb-14 text-orange-600 mb-[36px] cursor-pointer" onClick={handleSendSupportEmail}> stopflyingsolo@gmail.com</span>
        </div>
      </div>
      <div
        className="fb-14 w-full cursor-pointer bg-black py-2 text-center text-white md:py-4 mt-[36px] md:mt-[44px]"
        onClick={handleCloseModal}
        data-cy='error-modal'
      >
        OK
      </div>
    </div>
  );
};

export default ErrorModal;
