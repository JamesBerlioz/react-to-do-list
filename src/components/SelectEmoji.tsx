import { useAppSelector, useAppDispatch } from "./hooks/reduxHook";
import { changeEmoji } from "../features/AddListModalSlice";

function SelectEmoji() {
  const selectedEmoji = useAppSelector((state) => state.addListModal.selectedEmoji);
  const dispatch = useAppDispatch();
  return (
    <select
      className="SelectEmoji"
      name="emoji"
      value={selectedEmoji}
      onChange={(e) => dispatch(changeEmoji(e.target.value))}
    >
      <option value="&#128528;">&#128528;</option>
      <option value="&#128578;">&#128578;</option>
      <option value="&#128577;">&#128577;</option>
      <option value="&#128525;">&#128525;</option>
      <option value="&#128545;">&#128545;</option>
    </select>
  );
}

export default SelectEmoji;
