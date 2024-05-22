import { Link, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg">
      <h2>Error: {error.message}</h2>
      <pre>
        {error.status} - {error.statusText}
      </pre>
      <Link className="btn" to="/">
        Go back
      </Link>
    </div>
  );
};

export default ErrorElement;
