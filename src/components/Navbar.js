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
  Instagram,
} from "react-feather";
import user from "../images/user.png";

function Navbar() {
  return (
    <>
      <div className="block md:hidden fixed w-full px-5 py-2 border-b-2 border-b-gray-400 bg-white">
        <div className="flex justify-between items-center">
          <Instagram />
          <div className="relative">
            <Search size={17} className="absolute top-2 left-3" color="gray"/>
            <input type="text" placeholder="Search..." className="pl-9 py-1 bg-slate-200 rounded-md"/>
          </div>
          <Heart />
        </div>
      </div>
      <div className="xl:w-1/4 w-1/12 xl:items-start md:flex hidden items-center flex-col p-5 border-r-2 border-r-gray-400 h-screen fixed">
        <Instagram className="xl:hidden block" />
        <div className="text-3xl font-bold xl:block hidden">Instagram</div>
        <div className="flex justify-between flex-col h-screen">
          <div className="mt-10">
            <div className="flex gap-5 font-bold">
              <Home />
              <div className="xl:block hidden">Home</div>
            </div>
            <div className="flex gap-5 mt-5">
              <Search />
              <div className="xl:block hidden">Search</div>
            </div>
            <div className="flex gap-5 mt-5">
              <Compass />
              <div className="xl:block hidden">Explore</div>
            </div>
            <div className="flex gap-5 mt-5">
              <Film />
              <div className="xl:block hidden">Reels</div>
            </div>
            <div className="flex gap-5 mt-5">
              <Mail />
              <div className="xl:block hidden">Messages</div>
            </div>
            <div className="flex gap-5 mt-5">
              <Heart />
              <div className="xl:block hidden">Notifications</div>
            </div>
            <div className="flex gap-5 mt-5">
              <PlusSquare />
              <div className="xl:block hidden">Create</div>
            </div>
            <div className="flex gap-5 mt-5">
              <img
                alt="profile"
                src={user}
                height={24}
                width={24}
                className="rounded-full"
              ></img>
              <div className="xl:block hidden">Profile</div>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <AlignJustify />
              <div className="xl:block hidden">More</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
