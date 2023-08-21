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
      <option value="&#128512;">&#128512;</option>
      <option value=" &#128516;"> &#128516;</option>
      <option value="&#128525;">&#128525;</option>
      <option value=" &#128151;"> &#128151;</option>
    </select>
  );
}

export default SelectEmoji;
