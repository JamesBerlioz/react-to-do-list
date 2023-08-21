import TodosBackIcon from "./icons/TodosBackIcon";

function TodosBackground() {
  return (
    <section className="TodosBackground">
      <div className="TodosBackground__rectangle"></div>
      <div className="TodosBackground__img">
        <TodosBackIcon />
      </div>
      <p className="TodosBackground__text">Write some task or note ;&#10089;</p>
    </section>
  );
}

export default TodosBackground;
