import React, { useContext, useState } from "react";
import {
  CAT_ROUTE,
  JOKE_ROUTE,
  // ADMIN_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  NON_AUTH,
  REGISTRATION_ROUTE,
} from "../../utils/consts";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.scss";
// import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(true);
  const changeActive = () => {
    setIsActive((prev) => !prev);
  };
  const isCurrentLocation = (compLoc) => compLoc === location.pathname;
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate(NON_AUTH);
  };
  return (
    <nav className={"navHidden " + (isActive ? styles.navActive : "")}>
      <div className={styles.bMenu} onClick={() => changeActive()}>
        <svg
          fill="none"
          className={isActive ? styles.bMenuActive : ""}
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 18L20 18" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12L20 12" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 6L20 6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        {user.isAuth ? (
          <div
            className={styles.routes + " " + (isActive ? "" : styles.hidden)}
            onClick={() => setIsActive(true)}
          >
            <div
              className={
                (isCurrentLocation(MAIN_ROUTE) ? styles.currentLocation : "") +
                " " +
                (isActive ? "" : styles.short)
              }
              onClick={() => navigate(MAIN_ROUTE)}
            >
              Main
            </div>
            <div
              className={
                (isCurrentLocation(CAT_ROUTE) ? styles.currentLocation : "") +
                " " +
                (isActive ? "" : styles.short)
              }
              onClick={() => navigate(CAT_ROUTE)}
            >
              Cat
            </div>
            <div
              className={
                (isCurrentLocation(JOKE_ROUTE) ? styles.currentLocation : "") +
                " " +
                (isActive ? "" : styles.short)
              }
              onClick={() => navigate(JOKE_ROUTE)}
            >
              Jokes
            </div>
            {/*<div onClick={() => navigate(ADMIN_ROUTE)}>Admin</div>*/}
            <div onClick={() => logOut()}>Logout</div>
          </div>
        ) : (
          <div
            className={styles.routes + " " + (isActive ? "" : styles.short)}
            onClick={() => setIsActive(true)}
          >
            <div
              className={
                isCurrentLocation(MAIN_ROUTE) ? styles.currentLocation : ""
              }
              onClick={() => navigate(MAIN_ROUTE)}
            >
              Main
            </div>
            <div
              className={
                isCurrentLocation(LOGIN_ROUTE) ? styles.currentLocation : ""
              }
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Sing in
            </div>
            <div
              className={
                isCurrentLocation(REGISTRATION_ROUTE)
                  ? styles.currentLocation
                  : ""
              }
              onClick={() => navigate(REGISTRATION_ROUTE)}
            >
              Sing up
            </div>
          </div>
        )}
      </div>
      {/* <ThemeSwitcher/> */}
    </nav>
  );
});

export default NavBar;
