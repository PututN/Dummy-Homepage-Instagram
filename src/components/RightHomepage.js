import React from "react";
import user from "../images/user.png";
import http from "../helpers/http";

function RightHomepage() {
  const [profile, setProfile] = React.useState({});
  const [suggestion, setSuggestion] = React.useState(null);

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

  const fetchSuggestion = async () => {
    try {
      const response = await http().get("/suggestion");
      setSuggestion(response.data);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    fetchSuggestion();
  }, []);

  return (
    <div className="xl:w-1/3 w-auto lg:block hidden p-5">
      <div className="mb-5">
        <div className="flex items-center gap-3">
          {profile.picture ? (
            <img
              alt="profile"
              src={profile?.picture}
              className="rounded-full border-2 border-red-500 p-1 object-contain h-14 w-14 cursor-pointer"
            />
          ) : (
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-14 w-14"></div>
            </div>
          )}
          <div className="gap-3 flex justify-between items-center w-full">
            {profile.userName ? (
              <>
                <button className="flex flex-col">
                  <div className="font-bold">{profile?.userName}</div>
                  <div className="text-sm text-gray-400">
                    {profile?.fullName}
                  </div>
                </button>
                <button className="font-bold text-blue-600">Switch</button>
              </>
            ) : (
              <div className="flex flex-col gap-3 w-full">
                <div className="animate-pulse h-5 rounded-xl bg-slate-200 flex space-x-4"></div>
                <div className="animate-pulse h-5 rounded-xl bg-slate-200 flex space-x-4"></div>
              </div>
            )}{" "}
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="font-bold text-gray-500">Suggestions for you</div>
        <button className="font-bold text-gray-500">See All</button>
      </div>
      {suggestion ? (
        <div className="mt-5 flex flex-col gap-3">
          {" "}
          {suggestion.map((item) => {
            return (
              <div className="flex items-center gap-3" key={item.id}>
                {item.picture ? (
                  <img
                    alt="profile"
                    src={item.picture ? item.picture : user}
                    className="rounded-full border-2 border-red-500 p-1 object-contain h-14 w-14 cursor-pointer"
                  />
                ) : (
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-200 h-14 w-14"></div>
                  </div>
                )}
                <div className="gap-3 flex justify-between items-center w-full">
                  <button className="flex flex-col">
                    <div className="font-bold">{item.userName}</div>
                    <div className="text-sm text-gray-400">
                      Followed by {item.followedBy[0]} +{" "}
                      {item.followedBy.length} more
                    </div>
                  </button>
                  <button className="font-bold text-blue-600">Follow</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-5">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-14 w-14"></div>
            <div className="flex flex-col gap-3 w-full">
              <div className="animate-pulse h-5 rounded-xl bg-slate-200 flex space-x-4"></div>
              <div className="animate-pulse h-5 rounded-xl bg-slate-200 flex space-x-4"></div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-14 w-14"></div>
            <div className="flex flex-col gap-3 w-full">
              <div className="animate-pulse h-5 rounded-xl bg-slate-200 flex space-x-4"></div>
              <div className="animate-pulse h-5 rounded-xl bg-slate-200 flex space-x-4"></div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-14 w-14"></div>
            <div className="flex flex-col gap-3 w-full">
              <div className="animate-pulse h-5 rounded-xl bg-slate-200 flex space-x-4"></div>
              <div className="animate-pulse h-5 rounded-xl bg-slate-200 flex space-x-4"></div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-14 w-14"></div>
            <div className="flex flex-col gap-3 w-full">
              <div className="animate-pulse h-5 rounded-xl bg-slate-200 flex space-x-4"></div>
              <div className="animate-pulse h-5 rounded-xl bg-slate-200 flex space-x-4"></div>
            </div>
          </div>
        </div>
      )}

      <div className="text-gray-400 text-sm mt-5">
        <button href="#">About</button> <span>•</span>{" "}
        <button href="#">Help </button> <span>•</span>
        <button href="#"> Press </button> <span>•</span>{" "}
        <button href="#">API</button> <span>•</span>{" "}
        <button href="#">Jobs</button> <span>•</span>{" "}
        <button href="#">Privacy</button> <span>•</span>{" "}
        <button href="#">Terms</button> <span>•</span>{" "}
        <button href="#">Locations</button> <span>•</span>{" "}
        <button href="#">Language</button>
      </div>
      <div className="text-gray-400 text-sm mt-5">
        © 2023 {"Instagram from Meta".toUpperCase()}
      </div>
    </div>
  );
}

export default RightHomepage;
