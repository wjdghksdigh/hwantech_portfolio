
//component
import HeaderButton from './headerButton';
import DarkModeToggleButton from './dark_mode_toggle_button';

const Header = () => {
  return (
    <div className="flex relative items-center justify-center body-font z-10">
      <div className="container bg-white sm:text-xs mx-auto fixed flex flex-wrap p-6 md:p-4 flex-col w-full md:w-[500px] mt-14 md:mt-24 z-1 border-bottom md:border items-center border-gray-100 shadow-lg text-center md:rounded-3xl">
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