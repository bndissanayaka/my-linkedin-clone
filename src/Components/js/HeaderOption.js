import React from "react";
import "../css/HeaderOption.css";
import { MdAccountCircle } from "react-icons/md";
import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      {/* {avatar && (
        <Avatar
          className="headerOption__icon"
          src={user?.photoUrl}
          style={{ fontSize: "10px" }}
        >
          {user?.email[0].toUpperCase()}
        </Avatar>
      )} */}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
