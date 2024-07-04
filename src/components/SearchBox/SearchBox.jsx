import { useId } from 'react';

import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  const SearchBarId = useId();

  return (
    <div className={css.searchbox}>
      <label htmlFor={SearchBarId}>Find contacts by name</label>
      <input
        id={SearchBarId}
        name="SearchBar"
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
