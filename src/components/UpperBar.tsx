// type UpperBarProps = {
//   children: React.ReactNode;
// };

import AddListButton from "./AddListButton";

function UpperBar() {
  return (
    <header className="UpperBar">
      <p className="UpperBar__text">TO DO | YOUR LISTS</p>
      <AddListButton />
    </header>
  );
}

export default UpperBar;
