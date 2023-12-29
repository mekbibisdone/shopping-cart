import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
export default function ErrorElement() {
  const error = useRouteError();
  if (isRouteErrorResponse(error))
    return (
      <>
        <h1>Sorry this route doesn&apos;t exist</h1>
        <Link>Go back to home page</Link>
      </>
    );
}
