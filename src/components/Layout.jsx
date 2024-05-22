import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode ? "darkmode" : ""}`}>
      <header className="flex primary-header box-shadow">
        <Link to="/">
          <h1 className="fs-900">Where in the world?</h1>
        </Link>

        <button
          onClick={changeTheme}
          className={`${darkMode ? "darkmode" : ""} color-sw flex`}
        >
          {darkMode ? <IconSun /> : <IconMoon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <Outlet context={[darkMode, setDarkMode]} />
    </div>
  );
};

export default Layout;
