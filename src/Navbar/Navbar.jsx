import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-[#9341cf] font-bold text-[#9341cf] m-2"
            : "m-2"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-[#9341cf] font-bold text-[#9341cf] m-2"
            : "m-2"
        }
      >
        Apps
      </NavLink>

      <NavLink
        to="/installation"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-[#9341cf] font-bold text-[#9341cf] m-2"
            : "m-2"
        }
      >
        Installation
      </NavLink>
    </>
  );

  return (
    <div className=" bg-base-100 shadow-sm    fixed top-0 left-0 w-full z-50">
        <div className="navbar px-4 container mx-auto">
  
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <img className="w-10" src={logo} alt="logo" />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </Link>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/Jahid458"
          target="_blank"
          rel="noreferrer"
          className="btn bg-linear-to-r text-white font-semibold from-[#632EE3] to-[#9F62F2]"
        >
          <FaGithub className="mr-1.5" />
          Contribute
        </a>
      </div>

      </div>
      </div>
  );
};

export default Navbar;
