import CheckPlusIcon from "./icons/CheckPlus";
import { useAppDispatch } from "./hooks/reduxHook";
import { show } from "../features/AddTodoModalSlice";

function AddToDoButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      className="AddToDoButton mainButton"
      onClick={() => dispatch(show())}
    >
      <CheckPlusIcon />
      <p className="AddToDoButton__text">Add to-do</p>
    </button>
  );
}

export default AddToDoButton;
