import List from "./List";
import { useAppSelector } from "./hooks/reduxHook";

function ListContainer() {
  const data = useAppSelector((state) => state.data.data);

  return (
    <div className={"ListContainer"}>
      {data.map((list) => (
        <List key={list.id} id={list.id} title={list.title} />
      ))}
    </div>
  );
}

export default ListContainer;
