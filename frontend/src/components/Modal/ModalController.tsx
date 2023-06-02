import React from 'react';
import ModalTemplate from './Modal';
import VideoModal from './VideoModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';
import LoginModal from './LoginModal'
const types = {
  login: 'login',
  register: 'register',
  price: 'price',
  video: 'video',
  success: 'success',
  error: 'error',
  checkExistEmail: 'checkExistEmail',
};

const Modal = ({ ...props }) => {
  const modalType = useSelector(
    (state: RootState) => state.systemReducer.modal.type
  );
  switch (modalType) {
    case types.login:
      return (
        <ModalTemplate
          {...props}
          classNameProps="bg-neutral-100"
          showCloseBtn={false}
          showBgCloseBtn={true}
        >
          <LoginModal classNameProps="bg-black" />
        </ModalTemplate>
      );
    case types.video:
      return (
        <ModalTemplate
          {...props}
          classNameProps="bg-neutral-100"
          showCloseBtn={false}
          showBgCloseBtn={true}
        >
          <VideoModal classNameProps="bg-black" />
        </ModalTemplate>
      );
    case types.success:
      return (
        <ModalTemplate
          {...props}
          classNameProps=""
          showCloseBtn={false}
          showBgCloseBtn={false}
        >
          <SuccessModal classNameProps="" />
        </ModalTemplate>
      );
    case types.error:
      return (
        <ModalTemplate
          {...props}
          classNameProps=""
          showCloseBtn={false}
          showBgCloseBtn={false}
        >
          <ErrorModal classNameProps="" />
        </ModalTemplate>
      );
    default:
      <ModalTemplate {...props}>
        <div>No Modal</div>
      </ModalTemplate>;
  }
  return null;
};

Modal.types = types;

export default Modal;
