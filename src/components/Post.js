import React from "react";
// import user from "../images/user.png";
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

  return (
    <div className="lg:px-10 md:px-20 px-3 lg:py-5 pb-10 w-full">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex flex-row justify-between items-center mt-5">
              <div className="flex items-center gap-3">
                <img
                  alt="profile"
                  src={item.caption.from.profile_picture}
                  className="rounded-full border-2 border-red-500 p-1 object-contain h-14 w-14"
                />
                <div className="gap-3">
                  <div className="flex gap-3">
                    <div className="font-bold">
                      {item.caption.from.username}
                    </div>
                    <div className="gap-3 text-gray-400">
                      <span className="mr-3">•</span>
                      {moment(item.created_time.split('T')[0].split('-').join(''), "YYYYMMDD").fromNow()}
                    </div>
                  </div>
                  <div className="text-sm">Location</div>
                </div>
              </div>
              <div>
                <MoreHorizontal />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-center">
                <img alt="profile" src={item.images} 
                className="w-full h-auto" />
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-3 items-center">
                  <Heart />
                  <MessageCircle />
                  <Send />
                </div>
                <div>
                  <Bookmark />
                </div>
              </div>
              <div className="mt-2">
                Liked by <span className="font-bold">name_liked</span> and{" "}
                <span className="font-bold">Others</span>
              </div>
              <div className="my-2">
                <span className="font-bold">{item.caption.from.username} </span>
                {item.caption.text}
              </div>
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
