import { useState } from "react";
import logo from "../../assets/Logo/logo.png";
import "./navBar.css";
import { Link } from "react-router-dom";

const navBar = () => {
  const [mode, setMode] = useState("light");
  console.log(mode);

  const toggleButton = () => {
    setMode((mode) => (mode === "light" ? "dark" : "light"));
    console.log(mode);
  };

  return (
    <nav
      className={`flex m-10 items-center justify-between ${
        mode === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <Link to="/">
        <div className="mt-20">
          <img className="w-64 h-60 " src={logo} />
        </div>
      </Link>
      <ul className=" m-10 flex">
        <Link
          className={`ml-24 text-4xl tungsten-bold ${
            mode === "light" ? "text-black" : "text-white"
          } `}
          to="/"
        >
          HOME
        </Link>
        <Link
          className={`ml-24 text-4xl tungsten-bold ${
            mode === "light" ? "text-black" : "text-white"
          } `}
          to="/products"
        >
          PRODUCTOS
        </Link>
        <Link
          className={`ml-24 text-4xl tungsten-bold  ${
            mode === "light" ? "text-black" : "text-white"
          }`}
          to="/category/jewelery"
        >
          JEWELERY
        </Link>
        <Link
          className={`ml-24 text-4xl tungsten-bold  ${
            mode === "light" ? "text-black" : "text-white"
          }`}
          to="/category/electronics"
        >
          ELECTRONICS
        </Link>
        <Link className="ml-20 flex">
          {mode === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 bg-white"
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
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          )}

          <span
            className={`ml-2 text-4xl tungsten-bold ${
              mode === "light" ? "text-black" : "text-white"
            } `}
          >
            5
          </span>
        </Link>
        {mode === "light" ? (
          <svg
            onClick={toggleButton}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-8 h-8 ml-20"
          >
            <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
          </svg>
        ) : (
          <svg
            onClick={toggleButton}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 ml-20 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </ul>
    </nav>
  );
};

export default navBar;
