import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg">
      <h2>Page not Found</h2>
      <Link className="btn" to="/">
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
