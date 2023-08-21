import NoListBackIcon from "./icons/NoListBackIcon";

function NoListBackground() {
  return (
    <section className="NoListBackground TodosBackground">
      <div className="NoListBackground__rectangle TodosBackground__rectangle"></div>
      <div className="NoListBackground__img">
        <NoListBackIcon />
      </div>
      <div className="NoListBackground__text">
        <p className="NoListBackground__leftText">Start creating lists</p>
        <p className="NoListBackground__rightText">
          &#10088;<span className="NoListBackground__emoji">T_T</span>&#10089;
        </p>
      </div>
    </section>
  );
}

export default NoListBackground;
