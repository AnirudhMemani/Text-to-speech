import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = (): React.JSX.Element => {
  return (
    <div className="relative flex items-center justify-center w-full h-24 shadow-inner shadow-black bg-violet-800 text-white">
      <p className="text-xl">Copyright by Anirudh | All Rights Reserved.</p>
      <div className="absolute flex gap-4 right-20">
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
