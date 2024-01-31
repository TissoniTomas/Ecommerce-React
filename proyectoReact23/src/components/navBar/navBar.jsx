
import logo from "../../assets/Logo/logo.png";

// Hooks
import { useState, useContext, useEffect } from "react";

// Contextos
import {ModeContext} from "../../context/modeContext"
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

// React Router
import { Link } from "react-router-dom";

const NavBar = () => {

  const {mode, setMode} = useContext(ModeContext)
  const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext)

  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);

  useEffect(()=>{
    sessionStorage.setItem("theme", mode);
    console.log(mode);
  },[mode])

  const handleToggleMode = () => {
    setMode(mode === "light" ? "dark" : "light")
    
  };

  const toggleNavBar = () => {
    setOpenMenu(!openMenu);
  };

  const toggleCategories = () => {
    setOpenCategories(!openCategories);
  };

  const toggleNavBarKey = (e) => {
    e.key === "Escape" ? setOpenCategories(!openCategories) : null;
  };

  return (
    <>
      <nav
        className={` ${
          mode === "light" ? "bg-white " : "bg-gray-900"
        } lg:flex lg:fixed lg:z-10 justify-evenly  w-full box-border lg:h-54 top-0 `}
      >
        <div className="flex items-center justify-between ">
          <Link to="/">
            <img className="w-48 h-48" src={logo} />
          </Link>
          <span className="lg:hidden mr-5" onClick={toggleNavBar}>
            {openMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-10 h-10 ${
                  mode === "light" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-10 h-10 ${
                  mode === "light" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </span>
        </div>
        <ul
          className={`font-Montserrat text-xl flex flex-col items-center text-center ${
            openMenu ? "flex" : "hidden"
          }  lg:flex-row lg:items-center lg:flex lg:mr-8 whitespace-nowrap relative  `}
        >
          <Link to="/">
            <li
              onClick={openMenu}
              className={`mt-10 lg:mx-10 ${
                mode === "light"
                  ? "text-gray-900 hover:underline hover:decoration-gray-900"
                  : "text-white hover:underline hover:decoration-white"
              } lg:text-3xl `}
            >
              HOME
            </li>
          </Link>
          <Link to="/products">
            <li
              className={`mt-10 lg:mx-10 ${
                mode === "light"
                  ? "text-gray-900 hover:underline hover:decoration-gray-900"
                  : "text-white hover:underline hover:decoration-white"
              } lg:text-3xl `}
              onClick={openMenu}
            >
              PRODUCTS
            </li>
          </Link>

          <li
            onKeyUp={toggleNavBarKey}
            onClick={toggleCategories}
            tabIndex="0"
            className={`mt-10 lg:mx-10 cursor-pointer   ${
              mode === "light"
                ? "text-gray-900 hover:underline hover:decoration-gray-900"
                : "text-white hover:underline hover:decoration-white"
            } lg:text-3xl `}
          >
            CATEGORIES
          </li>
          {openCategories && (
            <ul
              onMouseLeave={toggleCategories}
              className={` my-4 h-auto flex lg:top-44 lg:absolute lg:right-64 lg:justify-between lg:flex-col lg:w-[700px] flex-col w-32 items-center  animate-fade-down animate-ease-in-out ${
                mode === "light" ? "bg-white " : "bg-gray-900"
              } `}
            >
              <Link to="/category/rockstar-games">
                <li
                  onClick={() => {
                    toggleCategories();
                    toggleNavBar();
                  }}
                  className={`py-4  w-full text-3xl ml-4 ${
                    mode === "light"
                      ? "text-gray-900 hover:underline hover:decoration-gray-900"
                      : "text-white hover:underline hover:decoration-white"
                  }`}
                >
                  ROCKSTAR GAMES MASTERPIECES
                </li>
              </Link>
              <Link to="/category/cod-saga">
                <li
                  onClick={() => {
                    toggleCategories();
                    toggleNavBar();
                  }}
                  className={`py-4  w-full text-3xl ml-4 ${
                    mode === "light"
                      ? "text-gray-900 hover:underline hover:decoration-gray-900"
                      : "text-white hover:underline hover:decoration-white"
                  }`}
                >
                  COD SAGA
                </li>
              </Link>
              <Link to="/category/nfs-saga">
                <li
                  onClick={() => {
                    toggleCategories();
                    toggleNavBar();
                  }}
                  className={`py-4  w-full text-3xl ml-4 ${
                    mode === "light"
                      ? "text-gray-900 hover:underline hover:decoration-gray-900"
                      : "text-white hover:underline hover:decoration-white"
                  }`}
                >
                  NEED FOR SPEED SAGA
                </li>
              </Link>
              <Link to="/category/sports&others">
                <li
                  onClick={() => {
                    toggleCategories();
                    toggleNavBar();
                  }}
                  className={`py-4  w-full text-3xl mr-4 ${
                    mode === "light"
                      ? "text-gray-900 hover:underline hover:decoration-gray-900"
                      : "text-white hover:underline hover:decoration-white"
                  }`}
                >
                  SPORT WORLD & OTHERS
                </li>
              </Link>
            </ul>
          )}

          <Link to="/contact">
            <li
              className={`mt-10 lg:mx-10 ${
                mode === "light"
                  ? "text-gray-900 hover:underline hover:decoration-gray-900"
                  : "text-white hover:underline hover:decoration-white"
              }  lg:text-3xl`}
              onClick={openMenu}
            >
              CONTACT
            </li>
          </Link>

          <Link to="/cart" className="mt-10 lg:mx-10 flex">
            {mode === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 bg-white hover:bg-gray-300 "
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white hover:bg-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            )}

            <span
              className={` ${
                mode === "light" ? "text-gray-900 " : "text-white "
              } lg:text-3xl `}
            >
              { shoppingCart.length >= 1 ? shoppingCart.length : null}
            </span>
          </Link>
          {mode === "light" ? (
            <svg
              onClick={handleToggleMode}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-8 h-8 transition transform hover:scale-105 cursor-pointer mt-10 hover:bg-gray-300"
            >
              <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
            </svg>
          ) : (
            <svg
              onClick={handleToggleMode}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white transition transform hover:scale-105 cursor-pointer mt-10 hover:bg-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
          <Link
            className={`mt-10 lg:mx-10 ${
              mode === "light" ? "text-gray-900" : "text-white"
            } lg:relative flex flex-col items-center`}
            to="/category/profile"
            onClick={() => setOpenProfile(!openProfile)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:bg-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {openProfile && (
              <ul
                className={`my-10 lg:absolute lg:top-10 flex flex-col w-36 items-start lg:border lg:border-gray-700 lg:rounded-xl animate-fade-down animate-ease-in-out ${
                  mode === "light" ? "bg-white" : "bg-gray-900"
                }`}
              >
                <li
                  className={`py-4 text-center w-full ${
                    mode === "light"
                      ? "text-gray-900 hover:underline hover:decoration-gray-900"
                      : "text-white hover:underline hover:decoration-white"
                  }`}
                >
                  MY PROFILE
                </li>
                <li
                  className={`py-4 text-center w-full ${
                    mode === "light"
                      ? "text-gray-900 hover:underline hover:decoration-gray-900"
                      : "text-white hover:underline hover:decoration-white"
                  }`}
                >
                  SETTINGS
                </li>
                <li
                  className={`py-4 text-center w-full ${
                    mode === "light"
                      ? "text-gray-900 hover:underline hover:decoration-gray-900"
                      : "text-white hover:underline hover:decoration-white"
                  }`}
                >
                  LOG OUT
                </li>
                <li></li>
              </ul>
            )}
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
