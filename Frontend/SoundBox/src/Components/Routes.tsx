import React, { SetStateAction } from "react";
import { Link } from "react-router-dom";

const Routes: React.FC<{
  title: string;
  setIsNavMenuVisible: React.Dispatch<SetStateAction<boolean>>;
}> = ({ title, setIsNavMenuVisible }): React.JSX.Element => {
  return (
    <>
      <Link
        className="mx-4 transition-all duration-200 ease-in-out hover:text-violet-700 active:text-violet-900"
        to={title}
        onClick={() => setIsNavMenuVisible(false)}
      >
        {title}
      </Link>
    </>
  );
};

export default Routes;
