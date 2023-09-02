import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
const Body = () => {
  return (
    <div className="flex border-2  border-red-500">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
