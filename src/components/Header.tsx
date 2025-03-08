import { useState } from "react";
import RightProfile from "./RightProfile";
import SearchInput from "./SearchInput";
// import Search from "./Search";

// import Logo from "../assets/Salesway.svg";
interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const [searchTerm , setSearchTerm] = useState('');
  return (
    <header className="flex sticky top-0  z-999  bg-white drop-shadow-1 ">
      <div className="flex flex-grow items-center px-6 py-4 shadow-2 md:px-6 2xl:px-11 gap-5 lg:min-h-[92px] ">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm  bg-[#4d44e8] border-0 border-primary p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden "
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}


        </div>
        <header className="w-full">
      {/* left section */}


      {/* right section */}
      <section className="col-span-10 flex gap-2 justify-between items-center bg-white relative">

        <h3 id="_left-text" className="text-primary font-semibold hidden lg:block whitespace-nowrap">
          AI/ML Model Builder
        </h3>
        <span className="lg:hidden"></span>

        <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-[273px] mx-auto"
            placeholder="Search"
          />
        <RightProfile />
      </section>
    </header>

      </div>
    </header>
  );
};

export default Header;
