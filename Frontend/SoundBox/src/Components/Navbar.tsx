import Routes from "./Routes";
import { ROUTES } from "../Utils/constants";
import StaggeredDropDown from "./StaggeredDropDown";
import { SetStateAction } from "react";

type NavbarProps = {
  voiceId: number;
  setVoiceId: React.Dispatch<SetStateAction<number>>;
};

const Navbar: React.FC<NavbarProps> = ({
  setVoiceId,
  voiceId,
}): React.JSX.Element => {
  const routesArr = [ROUTES.TEXT_TO_SPEECH, ROUTES.SPEECH_TO_SPEECH];
  return (
    <div className="sticky w-full h-24 transition-all duration-200 ease-in-out flex justify-center items-center shadow-sm shadow-violet-800">
      <StaggeredDropDown
        setVoiceId={setVoiceId}
        voiceId={voiceId}
      />
      {routesArr.map((route, index) => (
        <Routes
          title={route}
          key={index}
        />
      ))}
    </div>
  );
};

export default Navbar;
