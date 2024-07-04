import { Link } from "react-router-dom";

import css from "./Pages.module.css";
import DocumentTitle from "../components/DocumentTitle/DocumentTitle";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

export const Registration = () => {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>
      <h1>Register your account</h1>
      <RegistrationForm />
      <p>
        Have an account?{" "}
        <Link to="/login" className={css.link}>
          Log In
        </Link>
      </p>
    </>
  );
};

export default Registration;
