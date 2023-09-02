import React from "react";

const Header = () => {
  return (
    <div className="border-2 border-green-500 grid grid-flow-col shadow-lg m-1 p-2">
      <div className="flex col-span-1 justify-center ">
        <img
          className=" h-5 mt-4"
          src="https://openclipart.org/image/2000px/221605"
          alt="hamburger-manu"
        />
        <img
          className="h-14 ml-5"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="yt-logo"
        />
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          type="text"
          className="rounded-l-full w-96 border border-gray-400 text-3xl pl-6"
        />
        <button
          className="rounded-r-full border border-gray-400 p-2"
          placeholder="Search..."
        >
          search
        </button>
      </div>
      <div className="col-span-1 flex justify-center items-center  ">
        <img
          className="h-9"
          src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette-thumbnail.png"
          alt="usr-logo"
        />
      </div>
    </div>
  );
};

export default Header;
