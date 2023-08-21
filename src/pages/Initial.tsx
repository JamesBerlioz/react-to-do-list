import AddListModal from "../components/AddListModal";
import Container from "../components/Container";
import InitialBackground from "../components/InitialBackground";
import ListContainer from "../components/ListContainer";
import NoListBackground from "../components/NoListBackground";
import UpperBar from "../components/UpperBar";
import { useAppSelector } from "../components/hooks/reduxHook";

function Initial() {
  const data = useAppSelector((state) => state.data.data);
  const noList = useAppSelector((state) => state.data.noList);

  return (
    <div className="Initial">
      <UpperBar />
      <Container>
        {data.length === 0 ? (
          noList ? (
            <NoListBackground />
          ) : (
            <InitialBackground />
          )
        ) : (
          <ListContainer />
        )}
      </Container>
      <AddListModal />
    </div>
  );
}

export default Initial;
