import { useState, useEffect } from "react";

import css from "./Loader.module.css";

export const Loader = () => {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return <p className={css.text}>Request in progress{dots}</p>;
};

export default Loader;
