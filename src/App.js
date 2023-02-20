import React from "react";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Post from "./components/Post";
import RightHomepage from "./components/RightHomepage";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-1/2">
        <Story />
        <Post />
      </div>
      <RightHomepage />
      
    </div>
  );
}

export default App;
