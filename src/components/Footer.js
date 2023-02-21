import React from "react";
import { Home, Compass, Film, Mail, PlusSquare } from "react-feather";
// import user from "../images/user.png";
import http from "../helpers/http";

function Footer() {
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
    <div className="block md:hidden fixed w-full px-5 py-2 border-t-2 border-t-gray-400 bg-white bottom-0">
      <div className="flex justify-between items-center">
        <Home />
        <Compass />
        <Film />
        <PlusSquare />
        <Mail />
        <img
          alt="profile"
          src={profile.picture}
          className="rounded-full object-contain h-6 w-6"
        ></img>
      </div>
    </div>
  );
}

export default Footer;
