import { useNavigate } from "react-router-dom";
// @ts-expect-error "no type for image";
import astronaut from "../../Assets/astronaut.svg";
import "./styles/main.scss";

const NotFound: React.FC = (): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="NotFound__container">
      <main className="NotFound__content">
        <div className="message">
          <strong className="strong__tag">404</strong>
          <p className="title p__tag">LOOKS LIKE YOU ARE LOST IN THE SPACE</p>
          <p className="message-text p__tag">
            The page you are looking for might be removed or is temporally
            unavailable
          </p>
          <button
            title=""
            onClick={() => navigate(-1)}
            className="text-lg border-purple-800 transition-all duration-200 ease-in-out active:scale-95 hover:text-[#ffcb39] shadow-md shadow-slate-900 px-20 py-3 lg:text-xl xl:px-20"
          >
            Go Back
          </button>
        </div>
      </main>
      <div className="box-astronaut">
        <img
          className="astronaut__image"
          src={astronaut}
          alt="astronaut not found"
        />
      </div>
    </div>
  );
};

export default NotFound;
