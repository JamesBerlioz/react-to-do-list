import { useState } from "react";
import AddListButton from "./AddListButton";
import AddToDoButton from "./AddToDoButton";
import DeleteListButton from "./DeleteListButton";
import ArroLeftIcon from "./icons/ArrowLeft";
import { useNavigate } from "react-router-dom";
import { List } from "../features/DataSlice";

function UpperBar({ currentList }: { currentList?: List }) {
  const [isActive, setIsActive] = useState(false);
  const setActive = () => setIsActive(true);
  const setInactive = () => setIsActive(false);
  const navigate = useNavigate();

  return (
    <header className="UpperBar">
      {!currentList ? (
        <div className="UpperBar__box">
          <p className="UpperBar__text">TO DO | YOUR LISTS</p>
          <AddListButton />
        </div>
      ) : (
        <div className="UpperBar__toDoBox">
          <div className="UpperBar__left">
            <button
              className="UpperBar__backButton"
              onMouseEnter={setActive}
              onMouseLeave={setInactive}
              onClick={() => navigate(`/`)}
            >
              <ArroLeftIcon active={isActive} />
            </button>
            <p className="UpperBar__text">😐 {currentList.title}</p>
          </div>
          <div className="UpperBar__right">
            <DeleteListButton id={currentList.id} />
            <AddToDoButton />
          </div>
        </div>
      )}
    </header>
  );
}

export default UpperBar;
