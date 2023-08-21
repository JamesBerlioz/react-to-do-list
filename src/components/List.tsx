import { useReducer } from "react";
import ArrowIcon from "./icons/Arrow";
import TrashIcon from "./icons/Trash";
import { useAppDispatch } from "./hooks/reduxHook";
import { removeTitle } from "../features/DataSlice";
import { useNavigate } from "react-router-dom";

function List({ id, title }: { id: string; title: string }) {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const [isTrashShown, toggleTrashShown] = useReducer(
    (isTrashShown) => !isTrashShown,
    false
  );

  const [isActive, toggleActive] = useReducer((isActive) => !isActive, false);

  const removeList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(removeTitle(id));
  };

  return (
    <section
      className="List"
      onMouseEnter={toggleActive}
      onMouseLeave={toggleActive}
      onClick={() => navigate(`/${id}`)}
    >
      <div
        className="List__trash"
        onMouseEnter={toggleTrashShown}
        onMouseLeave={toggleTrashShown}
        onClick={removeList}
      >
        {isTrashShown && <TrashIcon active={false} size={"32px"} />}
      </div>
      <p className="List__title">😐 {title}</p>
      <ArrowIcon className="List__todos" active={isActive} />
    </section>
  );
}

export default List;
