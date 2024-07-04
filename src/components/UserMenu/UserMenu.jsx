import { useDispatch, useSelector } from "react-redux";

import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.wrap}>
      <p className={css.username}>{user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.btn}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
