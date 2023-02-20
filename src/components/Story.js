import React from "react";
import user from "../images/user.png";

function Story() {
  return (
    <div className="lg:px-10 md:px-20 px-3 lg:py-5 py-10 w-full overflow-x-scroll">
      <div className="gap-5 flex">
        <div className="flex flex-col justify-center items-center">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
      </div>
    </div>
  );
}

export default Story;
