import PlusIcon from "./icons/Plus";
import { useAppDispatch } from "./hooks/reduxHook";
import { show } from "../features/AddListModalSlice";

function AddListButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      className="AddListButton mainButton"
      onClick={() => dispatch(show())}
    >
      <PlusIcon />
      <p className="AddListButton__text">Add new List</p>
    </button>
  );
}

export default AddListButton;
