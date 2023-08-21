import { useEffect, useRef } from "react";
import List from "./List";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHook";
import { updateDataStatus } from "../features/DataSlice";

function ListContainer() {
  const data = useAppSelector((state) => state.data.data);
  const dataHasChanged = useAppSelector((state) => state.data.dataHasChanged);
  const dispatch = useAppDispatch();

  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (dataHasChanged) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      dispatch(updateDataStatus());
    }
  }, [dataHasChanged, dispatch]);

  return (
    <div className={"ListContainer"}>
      {data.map((list) => (
        <List key={list.id} id={list.id} title={list.title} emoji={list.emoji} />
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
}

export default ListContainer;
