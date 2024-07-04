import css from "./SearchBox.module.css";

import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const SearchBoxId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.searchbox}>
      <label htmlFor={SearchBoxId}>Find contacts by name</label>
      <input
        id={SearchBoxId}
        name="SearchBox"
        type="text"
        value={value}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
