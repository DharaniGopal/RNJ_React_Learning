import { useRouteError } from "react-router";

const Error = () => {
  const routeError = useRouteError();
  // console.log({ routeError });
  return (
    <div className="Error">
      <h1>OOPS!!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {routeError.status} : {routeError.statusText}
      </h3>
    </div>
  );
};

export default Error;
