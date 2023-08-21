import CheckboxIcon from "./icons/Checkbox";
import TrashIcon from "./icons/Trash";
import { useReducer } from "react";
import { useAppDispatch } from "./hooks/reduxHook";
import { completeTodo, removeTodo } from "../features/DataSlice";

function Todo({
  id,
  text,
  completed,
  index,
}: {
  id: string;
  text: string;
  completed: boolean;
  index: number;
}) {
  const dispatch = useAppDispatch();

  const [isTrashActive, toggleTrashActive] = useReducer((isTrashActive) => !isTrashActive, false);

  const toggleCheckbox = () => {
    dispatch(completeTodo({ id: id, index: index }));
  };

  return (
    <section className="Todo" data-testid="Todo">
      <div className="Todo__left">
        <div className="Todo__checkbox" onClick={toggleCheckbox}>
          <CheckboxIcon completed={completed} />
        </div>
        <p className="Todo__text">{text}</p>
      </div>
      <button
        className="Todo__trash"
        onMouseEnter={toggleTrashActive}
        onMouseLeave={toggleTrashActive}
        onClick={() => dispatch(removeTodo({ id: id, index: index }))}
      >
        <TrashIcon active={isTrashActive} />
      </button>
    </section>
  );
}

export default Todo;
