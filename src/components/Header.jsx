import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg mb-10 p-6">
      <div className="flex col-span-1 justify-center ">
        <img
          onClick={() => toggleMenuHandler()}
          className=" h-5 mt-4 cursor-pointer"
          src="https://openclipart.org/image/2000px/221605"
          alt="hamburger-manu"
        />
        <a href="/">
          <img
            className="h-14 ml-5"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="yt-logo"
          />
        </a>
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
