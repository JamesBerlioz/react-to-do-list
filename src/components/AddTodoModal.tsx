import CancelIcon from "./icons/Cancel";
import PlusIcon from "./icons/Plus";
import { useAppSelector, useAppDispatch } from "./hooks/reduxHook";
import { hide, changeValue } from "../features/AddTodoModalSlice";
import { useEffect, useRef, useState } from "react";
import useOutsideAlerter from "./hooks/outsideAlerter";
import { addTodo } from "../features/DataSlice";

function AddTodoModal({ id }: { id: string }) {
  const isShown = useAppSelector((state) => state.addTodoModal.isShown);
  const inputValue = useAppSelector((state) => state.addTodoModal.inputValue);
  const dispatch = useAppDispatch();

  const submit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(addTodo({ id: id, text: inputValue }));
      dispatch(hide());
      removeWarning();
    } else {
      setInputClassList(
        ["AddTodoModal__input", "AddTodoModal__input_warning"].join(" ")
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
    ? ["AddTodoModal", "AddTodoModal_show"].join(" ")
    : ["AddTodoModal", "AddTodoModal_hide"].join(" ");

  const [inputClassList, setInputClassList] = useState("AddTodoModal__input");
  const removeWarning = () => setInputClassList("AddTodoModal__input");

  const modalRef = useRef(null);
  useOutsideAlerter(modalRef, () => cancel());

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 300);
  }, [modalClassList, inputClassList]);

  return (
    <>
      <div className={modalClassList}>
        <div className="AddTodoModal__modal" ref={modalRef}>
          <div className="AddTodoModal__header">
            <p className="AddTodoModal__title">ADD NEW TO-DO</p>
            <button
              className="AddTodoModal__resetButton"
              onClick={() => cancel()}
            >
              <CancelIcon />
            </button>
          </div>
          <form className="AddTodoModal__form" onSubmit={(e) => submit(e)}>
            <div className="AddTodoModal__body">
              <input
                value={inputValue}
                onChange={(e) => onChange(e)}
                className={inputClassList}
                type="text"
                placeholder="enter a to-do..."
                required
                onAnimationEnd={removeWarning}
                ref={inputRef}
                autoFocus
              />
            </div>
            <div className="AddTodoModal__footer">
              <button
                type="submit"
                className="AddTodoModal__submitButton"
                onClick={(e) => submit(e)}
              >
                <PlusIcon />
                Add to-do
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTodoModal;
