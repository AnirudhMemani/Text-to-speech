import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Routes: React.FC<{
  title: string;
  onClick: () => void;
  className?: string;
}> = ({ title, className, onClick }): React.JSX.Element => {
  return (
    <>
      <Link
        className={twMerge(
          "mx-4 transition-all duration-200 ease-in-out hover:text-violet-700 active:scale-95",
          className
        )}
        to={title}
        onClick={onClick}
      >
        {title}
      </Link>
    </>
  );
};

export default Routes;
