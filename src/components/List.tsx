import { useState } from "react";
import ArrowIcon from "./icons/Arrow";
import TrashIcon from "./icons/Trash";
import { useAppSelector, useAppDispatch } from "./hooks/reduxHook";
import { removeTitle } from "../features/DataSlice";

function List({ id }: { id: string }) {
  const dispatch = useAppDispatch();

  const [isTrashShown, setIsTrashShown] = useState(false);
  const showTrash = () => setIsTrashShown(true);
  const hideTrash = () => setIsTrashShown(false);

  const [isActive, setIsActive] = useState(false);
  const setActive = () => setIsActive(true);
  const setInactive = () => setIsActive(false);

  const removeList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(removeTitle(id));
  };

  return (
    <button
      className="List"
      onMouseEnter={setActive}
      onMouseLeave={setInactive}
    >
      <div
        className="List__trash"
        onMouseEnter={showTrash}
        onMouseLeave={hideTrash}
        onClick={(e) => removeList(e)}
      >
        {isTrashShown && <TrashIcon />}
      </div>
      <p className="List__title">😐 New List</p>
      <ArrowIcon className="List__todos" active={isActive} />
    </button>
  );
}

export default List;
