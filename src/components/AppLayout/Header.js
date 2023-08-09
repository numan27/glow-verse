import React from "react";
import {
  Navbar,
  MobileNav,
  IconButton,
  Drawer,
  Input,
} from "@material-tailwind/react";
import { NavLink, Link } from "react-router-dom";
import IMAGES from "../../assets/images/index"
import { FiMenu } from "react-icons/fi"
import { RxCross2 } from "react-icons/rx"
import { BiSearchAlt2 } from "react-icons/bi"
import { GoSearch } from "react-icons/go"
import { BsBagHeart } from "react-icons/bs"

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const [openTop, setOpenTop] = React.useState(false);
  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <NavLink exact to="/" className="flex items-center navLink p-1 font-black touppercase tracking-wider" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/quiz" className="flex items-center navLink p-1 font-black touppercase tracking-wider" activeClassName="active">
          Skin Quiz
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className="flex items-center navLink p-1 font-black touppercase tracking-wider" activeClassName="active">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className="flex items-center navLink p-1 font-black touppercase tracking-wider" activeClassName="active">
          FAQs
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="flex items-center navLink p-1 font-black touppercase tracking-wider" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </ul>
  );

  return (
    <>
      <div className="bg-[#ee8bb9] shadow-2xl nav-bar">
        <Navbar className="bg-[#ee8bb9] border-0 shadow-none mx-auto max-w-screen-xl py-1 px-4 lg:px-8">
          <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <Link
              to="/"
              className="cursor-pointer"
            >
              <img src={IMAGES.LOGO} className="logo md:w-40 w-28" alt="logo" />
            </Link>
            <div className="hidden lg:block">{navList}</div>

            {/* Nav icon buttons */}
            <div className="lg:static fixed icons-button flex items-center">
              <IconButton variant="text" className="text-white hover:text-[#74322c]"
              onClick={openDrawerTop}
              >
                <GoSearch className="text-2xl" />
              </IconButton>
              <IconButton variant="text" className="text-white hover:text-[#74322c]">
                <BsBagHeart className="text-2xl" />
              </IconButton>
              <IconButton variant="text" className="text-white language"
              >
                <img src={IMAGES.LANGUAGE_ICON} className="language-icon" alt="languae" />
              </IconButton>
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <RxCross2 className="text-xl text-white" />
              ) : (
                <FiMenu className="text-xl text-white" />
              )}
            </IconButton>
          </div>
          <MobileNav open={openNav}>
            <div className="container mx-auto">
              {navList}
            </div>
          </MobileNav>
        </Navbar>
      </div>

      {/* // Search bar */}
      <Drawer
        placement="top"
        open={openTop}
        onClose={closeDrawerTop}
        className="p-4 search-drawer"
      >
        <div className="mb-6 w-11/12 mx-auto">
          <div className="flex items-center w-full justify-center shadow-xl rounded-lg p-2">
            <form className="w-full relative">
              <div className="w-full">
                <Input size="lg" className="w-full" label="Search" />
                <BiSearchAlt2 className="text-2xl absolute top-2 right-2 cursor-pointer" />
              </div>
            </form>
          </div>
          <RxCross2 onClick={closeDrawerTop} className="text-xl search-close cursor-pointer" />
        </div>
      </Drawer>
    </>
  );
}