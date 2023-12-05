import { useEffect, useState } from 'react';
import Link from 'next/link';

//component
import HeaderButton from './headerButton';
import DarkModeToggleButton from './dark_mode_toggle_button';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY < scrollY);
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    //   <div
    //     className={`items-center shadow-bottom fixed z-10 flex w-full justify-center border-gray-400 px-16 py-8 backdrop-blur transition duration-500 ease-in-out ${
    //       show ? '' : 'transparent'
    //     }`}
    //   >
    //   <Link href="/">
    //     <div className="text-baby-"> hwantech </div>
    //   </Link>
    //   <div className="inline-flex items-center justify-center sm:ml-auto">
    //     <HeaderButton name="Home" />
    //     <HeaderButton name="About" />
    //     <HeaderButton name="Projects" />
    //     <a href="https://open.kakao.com/o/s88qeANf" className="px-4" target="_blank"> Contact </a>
    //     <DarkModeToggleButton />
    //   </div>
    // </div>

  <header className="flex items-center justify-center body-font bg-white ">
    <div className="container mx-auto fixed flex flex-wrap p-4 flex-col md:flex-row w-[500px] mt-24 z-1 border items-center border-gray-100 shadow-lg text-center rounded-3xl">
      <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <HeaderButton name="Home" />
        <HeaderButton name="About" />
        <HeaderButton name="Projects" />
        <a href="https://open.kakao.com/o/s88qeANf" className="px-4" target="_blank"> Contact </a>
        <DarkModeToggleButton />
      </div>
    </div>
  </header>


  );
};

export default Header;