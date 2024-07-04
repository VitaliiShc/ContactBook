import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsX } from "react-icons/bs";

import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

export const SearchBox = () => {
  const SearchBoxId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <div className={css.searchbox}>
      <label htmlFor={SearchBoxId}>Find contacts</label>
      <div className={css.inputWrap}>
        <input
          id={SearchBoxId}
          name="SearchBox"
          type="text"
          placeholder="Enter name or number"
          value={value}
          onChange={(evt) => dispatch(changeFilter(evt.target.value))}
          className={css.input}
        />
        <button
          type="button"
          className={css.btn}
          onClick={() => dispatch(changeFilter(""))}
        >
          <BsX size="30" className={css.icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
