import { Link } from "react-router-dom";

const Routes: React.FC<{ title: string }> = ({ title }): React.JSX.Element => {
  return (
    <>
      <Link
        className="mx-4 hover:text-violet-900 active:text-violet-700"
        to={title}
      >
        {title}
      </Link>
    </>
  );
};

export default Routes;
