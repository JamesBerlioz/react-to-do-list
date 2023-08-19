// type UpperBarProps = {
//   children: React.ReactNode;
// };

import AddListButton from "./AddListButton";

function UpperBar() {
  return (
    <header className="UpperBar">
      <div className="UpperBar__box">
        <p className="UpperBar__text">TO DO | YOUR LISTS</p>
        <AddListButton />
      </div>
    </header>
  );
}

export default UpperBar;
