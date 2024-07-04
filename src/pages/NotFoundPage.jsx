import { Link } from "react-router-dom";

import css from "./Pages.module.css";
import DocumentTitle from "../components/DocumentTitle/DocumentTitle";

export const NotFound = () => {
  return (
    <>
      <DocumentTitle>Not Found Page</DocumentTitle>
      <h1 className={css.title}>Page not found</h1>
      <Link to="/" className={css.link}>
        Back to home page!
      </Link>
    </>
  );
};

export default NotFound;
