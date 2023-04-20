import React from "react";
import photoImg from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const handleOpenSubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom;
    openSubmenu(page, { center, bottom });
  };
 
 const handleCloseSubmenu = (e) => {
   if (!e.target.classList.contains("link-btn")) {
     closeSubmenu();
   }
 };
  return (
    <nav className="nav" onMouseOver={handleCloseSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={photoImg} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={handleOpenSubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={handleOpenSubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={handleOpenSubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Signin</button>
      </div>
    </nav>
  );
};

export default Navbar;
