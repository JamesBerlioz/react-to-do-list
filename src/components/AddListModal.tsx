import Cancel from "./icons/Cancel";
import PlusIcon from "./icons/Plus";
import { useAppSelector, useAppDispatch } from "./hooks/reduxHook";
import { hide } from "../features/AddListModalSlice";

function AddListModal() {
  const isShown = useAppSelector((state) => state.addListModal.isShown);
  const dispatch = useAppDispatch();

  const submit = () => {
    console.log("s");
  };
  const classList = isShown
    ? ["AddListModal", "AddListModal_show"].join(" ")
    : ["AddListModal", "AddListModal_hide"].join(" ");
  return (
    <>
      <div className={classList} id="AddListModal">
        <div className="AddListModal__modal">
          <div className="AddListModal__header">
            <p className="AddListModal__title">Title</p>
            <button
              className="AddListModal__resetButton"
              onClick={() => dispatch(hide())}
            >
              <Cancel />
            </button>
          </div>
          <form className="AddListModal__body">
            <input
              className="AddListModal__input"
              type="text"
              placeholder="title..."
            />
          </form>
          <div className="AddListModal__footer">
            <button
              className="AddListModal__submitButton"
              onClick={() => submit()}
            >
              <PlusIcon />
              Add list
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddListModal;

// type AddListModalProps = {
//   show?: boolean;
//   onHide?: any;
// };
