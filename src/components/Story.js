import React from "react";
import http from "../helpers/http";

function Story() {
  const [story, setStroy] = React.useState([]);
  const fetchStory = async () => {
    try {
      const response = await http().get("/story");
      setStroy(response.data);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  React.useEffect(() => {
    fetchStory();
  }, []);

  return (
    <div className="lg:px-10 md:px-20 px-3 lg:py-5 pt-10 pb-4 w-full overflow-x-scroll">
      <div className="gap-5 flex">
        {story.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center"
            >
              <img
                alt="profile"
                src={item.picture}
                className="rounded-full border-2 border-red-500 p-1 object-contain h-14 w-14"
              />
              <div>
                {item.userName.length >= 8
                  ? `${item.userName.slice(0, 5)}...`
                  : item.userName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Story;
