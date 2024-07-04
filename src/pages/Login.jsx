import { Link } from "react-router-dom";

import css from "./Pages.module.css";
import DocumentTitle from "../components/DocumentTitle/DocumentTitle";
import LoginForm from "../components/LoginForm/LoginForm";

export const Login = () => {
  return (
    <>
      <DocumentTitle>Log In</DocumentTitle>
      <h1>Please Log In</h1>
      <LoginForm />
      <p>
        New to Contact Book?{" "}
        <Link to="/register" className={css.link}>
          Register
        </Link>
      </p>
    </>
  );
};

export default Login;
