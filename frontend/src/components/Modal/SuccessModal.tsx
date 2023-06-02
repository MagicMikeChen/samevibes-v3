import React from "react";
import { useDispatch } from "react-redux";
import { closePopupModal } from "../../../store/actionCreators/systemAction";
interface SuccessModalProps {
  classNameProps?: string;
}
const SuccessModal = (props: SuccessModalProps) => {
  const { classNameProps } = props;
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closePopupModal());
  };
  return (
    <div
      className={`flex h-full w-[90vw] max-w-[408px] md:w-full md:max-w-[full] flex-col items-center justify-center bg-mgray-100 px-5 py-10 md:px-10 ${classNameProps}`}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="h6 md:h4 text-black">Thank you for contacting us!</div>
        <div className="fn-12 md:fn-14 md:mt-2 text-mgray-500">
          We have received your message.           We will get back to you shortly.

        </div>
        <div className="my-[36px] md:my-[4vh]">
          <img
            className="max-h-[140px] md:max-h-[16vh] object-cover object-center"
            src="/img/img-mail.svg"
            alt="success"
          />
        </div>
      </div>
      <div data-cy='success-modal' className="fb-14 w-full bg-black py-2 md:py-4 text-center text-white cursor-pointer" onClick={handleCloseModal}>
        OK
      </div>
    </div>
  );
};

export default SuccessModal;
