import React from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeProvider";
import { useContext } from "react";
import { THEME_TYPE } from "../Constant/Theme";
export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };
  return (
    <header className={`header ${theme === THEME_TYPE.DARK && "header-dark"}`}>
      <div className="d-flex justify-between align-center container">
        <p className="h-content">Where in the world?</p>
        {/* <p className='h-content'><BsSunFill/> Dark mode</p>   */}
        <div className="theme-btn">
          {theme === THEME_TYPE.DARK ? (
            <BsFillMoonFill className="theme-icon" />
          ) : (
            <BsSunFill className="theme-icon" />
          )}
          <span className={"switch-btn h-content"} onClick={handleToggle}>
            {theme === THEME_TYPE.DARK ? "LightMode" : "DarkMode"}
          </span>
        </div>
      </div>
      <Outlet />
    </header>
  );
}
