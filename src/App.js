import React from "react";
import "./App.css";
import Feed from "./Components/js/Feed";
import Header from "./Components/js/Header";
import LeftMenu from "./Components/js/LeftMenu";
import SideBar from "./Components/js/SideBar";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__body">
        <SideBar></SideBar>
        <Feed></Feed>
        {/* <LeftMenu></LeftMenu> */}
      </div>
      {/* <Header></Header>
   <Body></Body>
   <Sidebar></Sidebar>
   <Feed></Feed>
   <Widgets></Widgets> */}
    </div>
  );
}

export default App;
