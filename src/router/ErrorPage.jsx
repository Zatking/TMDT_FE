import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = "/";
  //   }, 5000);
  // }),
  //   [];
  return (
    <div id="error-page" className="h-screen translate-y-1/3">
      <h1 className="text-center text-6xl text-red-600 font-extrabold">
        Oops!
      </h1>
      <p className="text-center text-3xl pt-5">
        {" "}
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-center text-3xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
