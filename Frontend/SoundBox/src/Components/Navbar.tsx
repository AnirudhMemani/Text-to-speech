import Routes from "./Routes";
import { ROUTES } from "../Utils/constants";

const Navbar: React.FC = (): React.JSX.Element => {
  const routesArr = [ROUTES.TEXT_TO_SPEECH, ROUTES.SPEECH_TO_SPEECH];
  return (
    <div className="sticky w-full h-24 transition-all duration-200 ease-in-out flex justify-center items-center shadow-sm shadow-violet-800">
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
