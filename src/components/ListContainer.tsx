import List from "./List";
import { useAppSelector, useAppDispatch } from "./hooks/reduxHook";

function ListContainer() {
  const data = useAppSelector((state) => state.data.data);
  const dispatch = useAppDispatch();

  return (
    <div className="ListContainer">
      {data.map((list) => (
        <List key={list.id} id={list.id} />
      ))}
    </div>
  );
}

export default ListContainer;

// type ListContainerProps = {
//   children: React.ReactNode;
// };
