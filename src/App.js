import React from "react";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Post from "./components/Post";
import RightHomepage from "./components/RightHomepage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <div className="flex">
        <Navbar />
        <div className="xl:w-1/4 w-1/12 md:block hidden"></div>
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

export default App;
