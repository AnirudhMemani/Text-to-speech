import Routes from "./Routes";
import { ROUTES } from "../Utils/constants";
import StaggeredDropDown from "./StaggeredDropDown";
import { SetStateAction, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
// @ts-expect-error no type for images
import logo from "../Assets/logo.png";
import { twMerge } from "tailwind-merge";

type NavbarProps = {
  voiceId: number;
  setVoiceId: React.Dispatch<SetStateAction<number>>;
};

const Navbar: React.FC<NavbarProps> = ({
  setVoiceId,
  voiceId,
}): React.JSX.Element => {
  const routesArr = [ROUTES.TEXT_TO_SPEECH, ROUTES.SPEECH_TO_SPEECH];
  const [isNavMenuVisible, setIsNavMenuVisible] = useState<boolean>(false);
  return (
    <div className="sticky w-full h-24 transition-all duration-200 ease-in-out flex justify-between lg:justify-center items-center shadow-sm shadow-violet-800">
      <img
        src={logo}
        className="lg:hidden inline mx-4 w-36 h-[70%]"
      />
      <div
        className={twMerge(
          "absolute flex flex-col w-full opacity-0 lg:opacity-100 lg:flex-row lg:gap-0 gap-4 -z-50 items-start bg-black border-t shadow-md shadow-slate-700 lg:shadow-none lg:border-none border-slate-700 lg:w-fit lg:relative lg:flex lg:justify-center lg:items-center",
          isNavMenuVisible
            ? "top-full transition-opacity duration-300 ease-in-out py-6 opacity-100"
            : ""
        )}
      >
        <StaggeredDropDown
          setVoiceId={setVoiceId}
          voiceId={voiceId}
          setIsNavMenuVisible={setIsNavMenuVisible}
        />
        {routesArr.map((route, index) => (
          <Routes
            title={route}
            key={index}
            setIsNavMenuVisible={setIsNavMenuVisible}
          />
        ))}
      </div>
      <div className="lg:hidden mx-4">
        <Hamburger
          toggled={isNavMenuVisible}
          toggle={setIsNavMenuVisible}
          easing="ease-in-out"
          size={28}
          label="Show menu"
          color="white"
        />
      </div>
    </div>
  );
};

export default Navbar;
