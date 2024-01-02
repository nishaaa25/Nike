import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks } from "../constants";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container flex justify-between relative text-white items-start gap-20 flex-wrap max-lg:flex-col font-montserrat ">
      <div className="flex flex-col items-start">
        <a href="/"><img src={footerLogo} width={150} height={46} className="m-0"/></a>
        <p className="sm:max-w-sm text-base text-white-400 leading-7 mt-6">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((item) => (
            <div key={item.alt} className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
              <img src={item.src} alt={item.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h4 className="text-2xl leading-normal font-medium mb-6">{item.title}</h4>
            <ul>
              {item.links.map((item) => (
                <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="absolute bottom-[-50px]">Copyright &copy; 2023 by Nike. All rights reserved. </p>
    </footer>
  );
};

export default Footer;
