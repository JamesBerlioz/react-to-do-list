import CancelIcon from "./icons/Cancel";
import PlusIcon from "./icons/Plus";
import { useAppSelector, useAppDispatch } from "./hooks/reduxHook";
import { hide, changeValue } from "../features/AddListModalSlice";
import { useEffect, useRef, useState } from "react";
import useOutsideAlerter from "./hooks/outsideAlerter";
import { addTitle } from "../features/DataSlice";

function AddListModal() {
  const isShown = useAppSelector((state) => state.addListModal.isShown);
  const inputValue = useAppSelector((state) => state.addListModal.inputValue);
  const dispatch = useAppDispatch();

  const submit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(addTitle(inputValue));
      dispatch(hide());
      removeWarning();
    } else {
      setInputClassList(
        ["AddListModal__input", "AddListModal__input_warning"].join(" ")
      );
    }
  };

  const cancel = () => {
    dispatch(hide());
    removeWarning();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValue(e.target.value));
    removeWarning();
  };

  const modalClassList = isShown
    ? ["AddListModal", "AddListModal_show"].join(" ")
    : ["AddListModal", "AddListModal_hide"].join(" ");

  const [inputClassList, setInputClassList] = useState("AddListModal__input");
  const removeWarning = () => setInputClassList("AddListModal__input");

  const modalRef = useRef(null);
  useOutsideAlerter(modalRef, () => cancel());

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 300);
  }, [modalClassList, inputClassList]);

  return (
    <>
      <div className={modalClassList}>
        <div className="AddListModal__modal" ref={modalRef}>
          <div className="AddListModal__header">
            <p className="AddListModal__title">ADD NEW LIST</p>
            <button
              className="AddListModal__resetButton"
              onClick={() => cancel()}
            >
              <CancelIcon />
            </button>
          </div>
          <form className="AddListModal__form" onSubmit={(e) => submit(e)}>
            <div className="AddListModal__body">
              <input
                value={inputValue}
                onChange={(e) => onChange(e)}
                className={inputClassList}
                type="text"
                placeholder="enter a title..."
                required
                onAnimationEnd={removeWarning}
                ref={inputRef}
                autoFocus
              />
            </div>
            <div className="AddListModal__footer">
              <button
                type="submit"
                className="AddListModal__submitButton"
                onClick={(e) => submit(e)}
              >
                <PlusIcon />
                Add list
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddListModal;
