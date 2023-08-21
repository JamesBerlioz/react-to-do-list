import Container from "../components/Container";
import UpperBar from "../components/UpperBar";
import { useAppSelector } from "../components/hooks/reduxHook";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import TodosBackground from "../components/TodosBackground";
import TodosContainer from "../components/TodosContainer";
import AddTodoModal from "../components/AddTodoModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Todos() {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = useAppSelector((state) => state.data.data);
  const currentList = data.find((list) => list.id === id);

  const [classlist, setClasslist] = useState("Todos");
  const addMoveClass = () => setClasslist(["Todos", "Todos_move"].join(" "));

  if (currentList) {
    return (
      <div className={classlist} onAnimationEnd={() => navigate("/")}>
        <UpperBar currentList={currentList} animation={addMoveClass} />
        <Container>
          {currentList.todos.length === 0 ? (
            <TodosBackground />
          ) : (
            <TodosContainer currentList={currentList} />
          )}
        </Container>
        <AddTodoModal id={currentList.id} />
      </div>
    );
  } else {
    return <Navigate to="/" replace={true} />;
  }
}

export default Todos;
