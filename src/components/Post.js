import React from "react";
import user from "../images/user.png";
import {
  MoreHorizontal,
  MessageCircle,
  Heart,
  Send,
  Bookmark,
  Smile,
} from "react-feather";

function Post() {
  return (
    <div className="px-10 py-5 w-full">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={user}
            height={50}
            width={50}
            className="rounded-full border-2 border-red-500 p-1"
          />
          <div className="gap-3">
            <div className="flex gap-3">
              <div className="font-bold">Name</div>
              <div className="gap-3">
                <span className="mr-3">•</span>Time
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
        <img src={user} height={326} width={326} />
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
          <span className="font-bold">name </span>Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
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
}

export default Post;
