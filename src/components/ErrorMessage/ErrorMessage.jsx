import css from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <p className={css.errorMsg}>
      Oops, something wrong! Please, reload the page.
    </p>
  );
};

export default ErrorMessage;
