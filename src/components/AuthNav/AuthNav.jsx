import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AuthNav = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={buildLinkClass}>
          Log In
        </NavLink>
      </nav>
    </>
  );
};

export default AuthNav;
