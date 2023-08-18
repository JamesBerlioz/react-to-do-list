import AddListModal from "../components/AddListModal";
import Container from "../components/Container";
import InitialBackground from "../components/InitialBackground";
import UpperBar from "../components/UpperBar";

function Initial() {
  return (
    <>
      <UpperBar />
      <Container>
        <InitialBackground />
      </Container>
      <AddListModal />
    </>
  );
}

export default Initial;
