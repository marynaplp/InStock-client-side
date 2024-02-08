import "../Navigation/Navigation.scss";
import Arrow from "../../Assets/Icons/arrow_back-24px.svg"
import EditButton from "../Button/EditButton/EditButton"
function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className="navigation__card">
          <div className="navigation__link">
            <img src={Arrow} alt="arrow" />
            <h1 className="navigation__header">Washington</h1>
          </div>
          <div className="navigation__edit">
            {/* <div className="navigation__edit-icon">
              <EditIcon className="navigation__edit-icon-back" alt="edit" />
            </div> */}
            <EditButton/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
