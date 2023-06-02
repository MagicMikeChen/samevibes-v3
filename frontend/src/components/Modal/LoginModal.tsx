import React from 'react';
import { useDispatch } from 'react-redux';
import { closePopupModal } from '../../../store/actionCreators/systemAction';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { FaSpotify } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
interface LoginModalProps {
  classNameProps?: string;
}
const loginBgList = [
  { type: '', src: '/img/bg-login-1.jpg' },
  { type: '', src: '/img/bg-login-2.jpg' },
  { type: '', src: '/img/bg-login-3.jpg' },
  { type: '', src: '/img/bg-login-4.jpg' },
];
const LoginModal = (props: LoginModalProps) => {
  const { classNameProps } = props;
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closePopupModal());
  };
  return (
    <div
      className={`cs-main-bg-theme flex h-[90vh] w-[90vw] max-w-[408px] flex-col items-center justify-center md:w-[90vw] md:max-w-[90vw] ${classNameProps}`}
    >
      <div className="flex h-full w-full border border-solid border-black">
        <div className="flex w-1/2 flex-col items-center justify-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            className="relative h-full w-full"
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {loginBgList.map((img, index) => {
              return (
                <SwiperSlide key={`slide-${index}`}>
                  <img
                    className="h-full w-full object-cover"
                    src={img.src}
                    alt="logo"
                    key={`logo-${index}`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center px-4 md:px-12">
          <div className="fb-14 text-spotify-green flex h-[48px] w-full cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-80 px-8 text-center dark:bg-opacity-30 md:h-[60px]">
            <FaSpotify className="text-spotify-green text-lg md:text-4xl"></FaSpotify>
            <div className="h5 ml-4">Login with Spotify</div>
          </div>
          <div
            className="fb-14 mt-4 flex h-[48px] w-full cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-80 px-8 text-center dark:bg-opacity-30 md:h-[60px]"
            onClick={handleCloseModal}
          >
            <div className="h5 ml-4 text-white">Demo Mode</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
