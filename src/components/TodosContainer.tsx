import Todo from "./Todo";
import { List } from "../features/DataSlice";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHook";
import { updateDataStatus } from "../features/DataSlice";
import { useEffect, useRef } from "react";

function TodosContainer({ currentList }: { currentList: List }) {
  const dataHasChanged = useAppSelector((state) => state.data.dataHasChanged);
  const dispatch = useAppDispatch();

  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (dataHasChanged) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      dispatch(updateDataStatus());
    }
  }, [dataHasChanged, dispatch]);

  return (
    <div className="TodosContainer">
      {currentList.todos.map((todo, i) => (
        <Todo key={i} id={currentList.id} text={todo.text} completed={todo.completed} index={i} />
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
}

export default TodosContainer;
