import Todo from "./Todo";

import { List } from "../features/DataSlice";

function TodosContainer({ currentList }: { currentList: List }) {
  return (
    <div className="TodosContainer">
      {currentList.todos.map((todo, i) => (
        <Todo
          key={i}
          id={currentList.id}
          text={todo.text}
          completed={todo.completed}
          index={i}
        />
      ))}
    </div>
  );
}

export default TodosContainer;
