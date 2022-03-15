import React from "react";
import "../css/Header.css";
import {
  MdSearch,
  MdGroups,
  MdOutlineWork,
  MdSend,
  MdNotifications,
  MdOutlineApps,
  MdHome,
} from "react-icons/md";
import { Avatar, IconButton } from "@material-ui/core";
import HeaderOption from "./HeaderOption";
// import { useStateValue } from "./StateProvider";

const Header = () => {
  // const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__logo" src="linkedin.svg" alt="" />
        <div className="header__search">
          <MdSearch className="header__searchIcon" />
          <input type="text" className="header__input" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={MdHome} title="Home" />
        <HeaderOption Icon={MdGroups} title="My Network" />
        <HeaderOption Icon={MdOutlineWork} title="Jobs" />
        <HeaderOption Icon={MdSend} title="Messaging" />
        <HeaderOption Icon={MdNotifications} title="Notifications" />
        <HeaderOption avatar="me.jpg" title="me" />
      </div>
    </div>
  );
};

export default Header;
