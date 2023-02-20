import React from "react";
import user from "../images/user.png";

function Story() {
  return (
    <div className="px-10 py-5 w-full overflow-x-scroll">
      <div className="gap-5 flex">
        <div className="flex flex-col justify-center items-center">
          <img
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div>Name</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
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
