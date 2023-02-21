import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RightHomepage from "../components/RightHomepage";
import Post from "../components/Post";
import Story from '../components/Story'

function Main() {
  return (
    <div className="relative">
      <div className="flex">
        <Navbar />
        <div className="xl:w-1/4 w-[10%] md:block hidden"></div>
        <div className="lg:w-1/2 w-full md:mt-0 mt-7">
          <Story />
          <Post />
        </div>
        <RightHomepage />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
