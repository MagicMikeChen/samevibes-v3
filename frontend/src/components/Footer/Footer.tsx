import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-theme-400 text-white">
      <div className="mx-auto px-5 pt-10 md:px-16 3xl:w-[1920px]">
        {/* <div className="flex max-w-[360px] justify-between pb-12 md:pb-16 lg:max-w-[400px]">
          <div className="flex flex-col">
            <div className="font-g-semibold pb-1">Prouducts</div>
            {FOOTER_CONFIGS["products"].map((item, index) => {
              return (
                <Link href={`${item.link}`} key={item.showTitle} data-cy={item.showTitle}>
                  <a>
                    <div className="fn-14 cursor-pointer py-1 text-mgray-400 hover:text-white">
                      {item.showTitle}
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col">
            <div className="font-g-semibold pb-1">Resources</div>
            {FOOTER_CONFIGS["resources"].map((item, index) => {
              return (
                <div key={item.showTitle}>
                  {item.showTitle === "" ? (
                    <div className="fn-14 py-1 text-mgray-400 hover:text-white" data-cy={item.link}>
                      <a href={item.link}> {item.showTitle}</a>
                    </div>
                  ) : (
                    <Link href={`${item.link}`} data-cy={item.link}>
                      <a>
                        <div className="fn-14 cursor-pointer py-1 text-mgray-400 hover:text-white">
                          {item.showTitle}
                        </div>
                      </a>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col">
            <div className="font-g-semibold pb-1">Company</div>
            {FOOTER_CONFIGS["company"].map((item, index) => {
              return (
                <Link href={`${item.link}`} key={item.showTitle} data-cy={item.link}>
                  <a>
                    <div className="fn-14 cursor-pointer py-1 text-mgray-400 hover:text-white">
                      {item.showTitle}
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-between border-t-[0.5px] border-mgray-500 text-xl text-white md:flex-row">
          <div className="flex py-8 md:py-6">
            <div className="flex cursor-pointer items-center justify-center rounded-full bg-theme-700 p-2 hover:bg-theme-600">
              <a
                href="https://www.instagram.com/magicmike.taipei/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram></FaInstagram>
              </a>
            </div>
            <div className="flex cursor-pointer items-center justify-center rounded-full bg-theme-700 p-2 hover:bg-theme-600 ml-2">
              <a
                href="https://www.facebook.com/PhotographyCoachMike"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook></FaFacebook>
              </a>
            </div>

          </div>

          <div className="fn-12 flex flex-col-reverse items-center text-mgray-700 md:flex-row">
            <div className="py-4 text-center">2023 © All rights reserved</div>
            {/* <div className="flex pt-2 md:pt-0">
              <div className="flex">
                <Link href="/terms-of-service/">
                  <a>
                    <div className="cursor-pointer hover:text-white">Terms of Service</div>
                  </a>
                </Link>
                ｜
              </div>
              <div>
                <Link href="/privacy-policy/">
                  <a>
                    <div className="cursor-pointer hover:text-white">Privacy Policy</div>
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
