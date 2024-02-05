import { useNavigate } from "react-router-dom";

const NotFound: React.FC = (): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-[url('../Assets/404_not_found.png')] bg-no-repeat bg-cover w-full h-full cursor-default">
      <button
        className="absolute bottom-[50%] left-[50%] translate-x-[-50%] h-16 w-40 rounded-md flex items-center justify-center border border-slate-500 hover:scale-105 transition-all duration-200 ease-in-out active:scale-90 a bg-transparent"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
