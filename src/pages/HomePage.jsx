import css from "./Pages.module.css";
import DocumentTitle from "../components/DocumentTitle/DocumentTitle";

export const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home Page</DocumentTitle>
      <h1 className={css.homeTitle}>Contact Book App welcome page</h1>
    </>
  );
};

export default HomePage;
