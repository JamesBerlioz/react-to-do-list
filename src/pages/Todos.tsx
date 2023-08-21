import Container from "../components/Container";
import UpperBar from "../components/UpperBar";
import { useAppSelector } from "../components/hooks/reduxHook";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import TodosBackground from "../components/TodosBackground";
import TodosContainer from "../components/TodosContainer";
import AddTodoModal from "../components/AddTodoModal";

function Todos() {
  const { id } = useParams();

  const data = useAppSelector((state) => state.data.data);
  const currentList = data.find((list) => list.id === id);

  if (currentList) {
    return (
      <>
        <UpperBar currentList={currentList} />
        <Container>
          {currentList.todos.length === 0 ? (
            <TodosBackground />
          ) : (
            <TodosContainer currentList={currentList} />
          )}
        </Container>
        <AddTodoModal id={currentList.id} />
      </>
    );
  } else {
    return <Navigate to="/" replace={true} />;
  }
}

export default Todos;
