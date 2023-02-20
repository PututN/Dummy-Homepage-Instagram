import React from "react";
import { Home, Compass, Film, Mail, PlusSquare } from "react-feather";
import user from "../images/user.png";

function Footer() {
  return (
    <div className="block md:hidden fixed w-full px-5 py-2 border-t-2 border-t-gray-400 bg-white bottom-0">
      <div className="flex justify-between items-center">
        <Home />
        <Compass />
        <Film />
        <PlusSquare />
        <Mail />
        <img
          alt="profile"
          src={user}
          height={24}
          width={24}
          className="rounded-full"
        ></img>
      </div>
    </div>
  );
}

export default Footer;
