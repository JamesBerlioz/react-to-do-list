import PlusIcon from "./icons/Plus";
import { useDispatch } from "react-redux";
import { show } from "../features/AddListModalSlice";

function AddListButton() {
  const dispatch = useDispatch();

  return (
    <button className="AddListButton" onClick={() => dispatch(show())}>
      <PlusIcon />
      <p className="AddListButton__text">Add new List</p>
    </button>
  );
}

export default AddListButton;
