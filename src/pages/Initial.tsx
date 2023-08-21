import AddListModal from "../components/AddListModal";
import Container from "../components/Container";
import InitialBackground from "../components/InitialBackground";
import ListContainer from "../components/ListContainer";
import NoListBackground from "../components/NoListBackground";
import UpperBar from "../components/UpperBar";
import { useAppSelector } from "../components/hooks/reduxHook";

function Initial() {
  const data = useAppSelector((state) => state.data.data);

  return (
    <>
      <UpperBar />
      <Container>
        {data.length === 0 ? <InitialBackground /> : <ListContainer />}
      </Container>
      <AddListModal />
    </>
  );
}

export default Initial;
