import React from "react";
import {
  Home,
  Search,
  Compass,
  Film,
  Mail,
  Heart,
  PlusSquare,
  AlignJustify,
} from "react-feather";
import user from "../images/user.png";

function Navbar() {
  return (
    <div className="w-1/4 flex flex-col p-5 border-r-2 border-r-gray-400 h-screen">
      <div className="text-3xl font-bold">Instagram</div>
      <div className="flex justify-between flex-col h-screen">
        <div className="mt-10">
          <div className="flex gap-5 font-bold">
            <Home />
            Home
          </div>
          <div className="flex gap-5 mt-5">
            <Search />
            Search
          </div>
          <div className="flex gap-5 mt-5">
            <Compass />
            Explore
          </div>
          <div className="flex gap-5 mt-5">
            <Film />
            Reels
          </div>
          <div className="flex gap-5 mt-5">
            <Mail />
            Messages
          </div>
          <div className="flex gap-5 mt-5">
            <Heart />
            Notifications
          </div>
          <div className="flex gap-5 mt-5">
            <PlusSquare />
            Create
          </div>
          <div className="flex gap-5 mt-5">
            <img
              src={user}
              height={24}
              width={24}
              className="rounded-full"
            ></img>
            Profile
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <AlignJustify />
            More
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
