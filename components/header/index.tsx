// components/header/index.tsx
import React, { useState, useEffect } from 'react';

// component
import HeaderButton from './headerButton';
import DarkModeToggleButton from './dark_mode_toggle_button';

// handler
import { handleScroll } from '@/utils/handler';

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // handle scroll 이번트 함수
  useEffect(() => {
    const scrollHandler = () => {
      handleScroll(prevScrollPos, setIsHeaderVisible, setPrevScrollPos);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [prevScrollPos]);

  return (
    <div className={`fixed top-0 left-0 w-full z-10 transition-transform duration-300 transform ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container relative bg-white sm:text-xs mx-auto flex flex-wrap p-4 md:p-4 flex-col w-full md:w-[500px] md:mt-6 z-1 border-bottom md:border items-center border-gray-100 shadow-lg text-center md:rounded-3xl">
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center pointer">
          <HeaderButton name="Home" />
          <HeaderButton name="About" />
          <HeaderButton name="Projects" />
          <a href="https://open.kakao.com/o/s88qeANf" className="text-xs md:text-base capitalize mt-0.5 md:mt-0 px-4" target="_blank"> Contact </a>
          <DarkModeToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
