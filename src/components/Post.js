import React from "react";
import {
  MoreHorizontal,
  MessageCircle,
  Heart,
  Send,
  Bookmark,
  Smile,
} from "react-feather";
import db from "../API/db.json";
import moment from "moment";

function Post() {
  const data = db.record.data;
  let [userLoved, setUserLoved] = React.useState([]);

  const handleLove = (index) => {
    if (!userLoved.includes(index)) {
      userLoved.push(index);
      setUserLoved([...userLoved]);
    } else {
      setUserLoved(userLoved.filter((el) => el !== index));
    }
  };

  let [saved, setSaved] = React.useState([]);

  const handleSave = (index) => {
    if (!saved.includes(index)) {
      saved.push(index);
      setSaved([...saved]);
    } else {
      setSaved(saved.filter((el) => el !== index));
    }
  };

  const shareData = {
    title: "Frontend Assignment",
    text: "Share post",
    url: "https://developer.mozilla.org",
  };

  const handleShare = async (id) => {
    try {
      await navigator.share(shareData);
      alert(`Share post success with id ${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="lg:px-10 md:px-20 px-3 lg:py-5 pb-10 w-full">
      {data.map((item, index) => {
        return (
          <div key={String(index)}>
            <div className="flex flex-row justify-between items-center mt-5">
              <div className="flex items-center gap-3">
                <button>
                  <img
                    alt="profile"
                    src={item.caption.from.profile_picture}
                    className="rounded-full border-2 border-red-500 p-1 object-contain h-14 w-14"
                  />
                </button>
                <div className="gap-3">
                  <div className="flex gap-3">
                    <button className="font-bold">
                      {item.caption.from.username}
                    </button>
                    <div className="gap-3 text-gray-400">
                      <span className="mr-3">•</span>
                      {moment(
                        item.created_time.split("T")[0].split("-").join(""),
                        "YYYYMMDD"
                      ).fromNow()}
                    </div>
                  </div>
                  {item.location ? (
                    <div className="text-sm">{item.location}</div>
                  ) : null}
                </div>
              </div>
              <button>
                <MoreHorizontal />
              </button>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-center">
                <img
                  alt="profile"
                  src={item.images}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-3 items-center">
                  <button onClick={() => handleLove(index)}>
                    {userLoved.includes(index) ? (
                      <Heart color="red" fill="red" />
                    ) : (
                      <Heart />
                    )}
                  </button>
                  <button>
                    <MessageCircle />
                  </button>
                  <button onClick={() => handleShare(item.id)}>
                    <Send />
                  </button>
                </div>
                <button onClick={() => handleSave(index)}>
                  {saved.includes(index) ? (
                    <Bookmark fill="black" />
                  ) : (
                    <Bookmark />
                  )}
                </button>
              </div>
              {userLoved.includes(index) ? (
                <button className="mt-2">
                  You and Liked by{" "}
                  <span className="font-bold">{item.liked_post[0]}</span> and{" "}
                  <span className="font-bold">
                    {userLoved.includes(index)
                      ? item.liked_post.length + 1
                      : item.liked_post.length}{" "}
                    Others
                  </span>
                </button>
              ) : (
                <button className="mt-2">
                  Liked by{" "}
                  <span className="font-bold">{item.liked_post[0]}</span> and{" "}
                  <span className="font-bold">
                    {userLoved.includes(index)
                      ? item.liked_post.length + 1
                      : item.liked_post.length}{" "}
                    Others
                  </span>
                </button>
              )}
              <div className="mt-2">
                <button className="font-bold">
                  {item.caption.from.username}{" "}
                </button>{" "}
                {item.caption.text}
              </div>
              {item.comment.length === 0 ? (
                <div className="my-2 text-gray-400 font-semibold">
                  no one has left a comment yet
                </div>
              ) : (
                <>
                  <button className="text-gray-400">
                    View all {item.comment.length} comments
                  </button>

                  <div className="my-2 flex items-center gap-3">
                    <div className="flex-1 flex gap-3">
                      <div className="h-8 w-8">
                        <img
                          alt="profile"
                          src={item.comment[0].picture}
                          className="rounded-full object-contain h-8 w-8 cursor-pointer"
                        />
                      </div>
                      <div className="gap-3">
                        <button className="font-bold">
                          {item.comment[0].userName}
                        </button>{" "}
                        {item.comment[0].text}
                      </div>
                    </div>
                    <div className="text-gray-400">
                      {moment(
                        item.comment[0].createdAt
                          .split("T")[0]
                          .split("-")
                          .join(""),
                        "YYYYMMDD"
                      ).fromNow()}
                    </div>
                  </div>
                </>
              )}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="pb-5 w-full border-b-2 border-b-gray-400"
                ></input>
                <Smile size={20} className="absolute top-2 right-2" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
