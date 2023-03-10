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
import http from "../helpers/http";

function Navbar() {
  const [profile, setProfile] = React.useState({});
  const fetchProfile = async () => {
    try {
      const response = await http().get("/profile");
      setProfile(response.data);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <div className="block md:hidden fixed w-full px-5 py-2 border-b-2 border-b-gray-400 bg-white z-50">
        <div className="flex justify-between items-center">
          <button>
            <Instagram />
          </button>
          <div className="relative">
            <Search size={17} className="absolute top-2 left-3" color="gray" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 py-1 bg-slate-200 rounded-md"
            />
          </div>
          <Heart />
        </div>
      </div>
      <div className="xl:w-1/4 w-1/12 xl:items-start md:flex hidden items-center flex-col p-5 border-r-2 border-r-gray-400 h-screen fixed">
        <button>
          <Instagram className="xl:hidden block" />
        </button>
        <button className="text-3xl font-bold xl:block hidden font-billabong">
          Instagram
        </button>
        <div className="flex justify-between flex-col h-screen">
          <div className="mt-10">
            <button className="flex gap-5 font-bold">
              <Home />
              <div className="xl:block hidden">Home</div>
            </button>
            <button className="flex gap-5 mt-5">
              <Search />
              <div className="xl:block hidden">Search</div>
            </button>
            <button className="flex gap-5 mt-5">
              <Compass />
              <div className="xl:block hidden">Explore</div>
            </button>
            <button className="flex gap-5 mt-5">
              <Film />
              <div className="xl:block hidden">Reels</div>
            </button>
            <button className="flex gap-5 mt-5">
              <Mail />
              <div className="xl:block hidden">Messages</div>
            </button>
            <button className="flex gap-5 mt-5">
              <Heart />
              <div className="xl:block hidden">Notifications</div>
            </button>
            <button className="flex gap-5 mt-5">
              <PlusSquare />
              <div className="xl:block hidden">Create</div>
            </button>
            <button className="flex gap-5 mt-5">
              <img
                alt="profile"
                src={profile.picture ? profile.picture : user}
                className="rounded-full object-contain h-6 w-6"
              ></img>
              <div className="xl:block hidden">Profile</div>
            </button>
          </div>
          <div>
            <button className="flex gap-5">
              <AlignJustify />
              <div className="xl:block hidden">More</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
