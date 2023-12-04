import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import hustLogo from "../../assets/image/hust-logo-official_.3m.jpeg";
import "./Header.css";
import AuthService from "../../services/auth.service";
import EventBus from "../../common/EventBus";
import DataContext from "DataContext";

export default function Header() {
  const [currentUser, setCurrentUser] = useState(undefined);
  let userContext = useContext(DataContext);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      userContext.updateRole(user.roles[0]);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <nav className="header">
      {/* <img src={hustLogo} alt="logo" className="hust-logo" /> */}
      <Link to={"/"} className="nav-brand">
        QLDA
      </Link>
      <div className="nav-group nav-group1">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>

        { userContext.role=="ROLE_MODERATOR" &&
          <li className="nav-item">
            <Link to={"/timeTable"} className="nav-link">
              Lịch
            </Link>
          </li>
        }

        {/* <li className="nav-item">
          <Link to={"/admin"} className="nav-link">
            Admin Board
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/user"} className="nav-link">
            User
          </Link>
        </li> */}
      </div>

      {currentUser ? (
        <div className="nav-group nav-group2">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              {currentUser.username}
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={logOut}>
              LogOut
            </a>
          </li>
        </div>
      ) : (
        <div className="nav-group nav-group2">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
}
