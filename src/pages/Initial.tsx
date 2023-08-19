import AddListModal from "../components/AddListModal";
import Container from "../components/Container";
import InitialBackground from "../components/InitialBackground";
import ListContainer from "../components/ListContainer";
import UpperBar from "../components/UpperBar";

function Initial() {
  return (
    <>
      <UpperBar />
      <Container>
        <InitialBackground />
        <ListContainer />
      </Container>
      <AddListModal />
    </>
  );
}

export default Initial;
