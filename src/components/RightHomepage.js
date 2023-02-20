import React from "react";
import user from "../images/user.png";

function RightHomepage() {
  return (
    <div className="xl:w-1/3 w-auto lg:block hidden p-5">
      <div className="mb-5">
        <div className="flex items-center gap-3">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div className="gap-3 flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="font-bold">Name</div>
              <div className="text-sm text-gray-400">Full Name</div>
            </div>
            <div className="font-bold text-blue-600">Switch</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="font-bold text-gray-500">Suggestions for you</div>
        <div className="font-bold text-gray-500">See All</div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div className="gap-3 flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="font-bold">Name</div>
              <div className="text-sm text-gray-400">
                Followed by name_followed + xx more
              </div>
            </div>
            <div className="font-bold text-blue-600">Follow</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div className="gap-3 flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="font-bold">Name</div>
              <div className="text-sm text-gray-400">
                Followed by name_followed + xx more
              </div>
            </div>
            <div className="font-bold text-blue-600">Follow</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div className="gap-3 flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="font-bold">Name</div>
              <div className="text-sm text-gray-400">
                Followed by name_followed + xx more
              </div>
            </div>
            <div className="font-bold text-blue-600">Follow</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            alt="profile"
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div className="gap-3 flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="font-bold">Name</div>
              <div className="text-sm text-gray-400">
                Followed by name_followed + xx more
              </div>
            </div>
            <div className="font-bold text-blue-600">Follow</div>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-sm mt-5">
        <button href="#">About</button> <span>•</span> <button href="#">Help </button>{" "}
        <span>•</span>
        <button href="#"> Press </button> <span>•</span> <button href="#">API</button>{" "}
        <span>•</span> <button href="#">Jobs</button> <span>•</span>{" "}
        <button href="#">Privacy</button> <span>•</span> <button href="#">Terms</button>{" "}
        <span>•</span> <button href="#">Locations</button> <span>•</span>{" "}
        <button href="#">Language</button>
      </div>
      <div className="text-gray-400 text-sm mt-5">
        © 2023 {"Instagram from Meta".toUpperCase()}
      </div>
    </div>
  );
}

export default RightHomepage;
