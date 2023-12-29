import { Link } from "react-router-dom";
export default function ErrorElement() {
  return (
    <>
      <h1>Sorry this route doesn&apos;t exist</h1>
      <Link>Go back to home page</Link>
    </>
  );
}
