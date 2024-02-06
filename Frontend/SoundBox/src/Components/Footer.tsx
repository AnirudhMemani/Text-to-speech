import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = (): React.JSX.Element => {
  return (
    <div className="relative flex items-center sm:justify-center justify-between w-full h-24 shadow-inner shadow-black bg-violet-800 text-white">
      <p className="sm:text-lg sm:ml-0 ml-4 md:text-xl">
        Copyright by Anirudh | All Rights Reserved.
      </p>
      <div className="sm:absolute flex gap-4 sm:mx-0 mx-4 right-20">
        <a
          className="no-underline"
          target="_blank"
          href="https://github.com/AnirudhMemani"
        >
          <FaGithub
            className="hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            size={20}
          />
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/anirudhmemani/"
        >
          <FaLinkedin
            size={20}
            className="hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
