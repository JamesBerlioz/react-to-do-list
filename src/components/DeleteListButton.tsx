import TrashIcon from "./icons/Trash";
import { useAppDispatch } from "./hooks/reduxHook";
import { removeTitle } from "../features/DataSlice";

function DeleteListButton({ id }: { id: string }) {
  const dispatch = useAppDispatch();

  const removeList = () => {
    dispatch(removeTitle(id));
  };
  return (
    <button className="DeleteListButton mainButton" onClick={removeList}>
      <TrashIcon active={true} />
      <p className="DeleteListButton__text">Delete List</p>
    </button>
  );
}

export default DeleteListButton;
