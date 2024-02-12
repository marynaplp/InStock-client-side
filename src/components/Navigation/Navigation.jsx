import "../Navigation/Navigation.scss";
import Arrow from "../../Assets/Icons/arrow_back-24px.svg"
import EditButton from "../Button/EditButton/EditButton"
import { useNavigate, useLocation } from "react-router-dom";


function Navigation({value}) {
  const navigate = useNavigate();
  const warehouse = value;

  const handleBackClick = () => {
    navigate("/Warehouses");
  };
  const handletoEdit = () =>{
    navigate("/EditWarehouse", { state: { warehouse } });
  }
  return (
    <>
      <div className="navigation">
        <div className="navigation__card">
          <div className="navigation__link">
            <img src={Arrow} alt="arrow" onClick={handleBackClick}/>
            <h1 className="navigation__header">Washington</h1>
          </div>
          <div className="navigation__edit">
            <EditButton
            onClick={handletoEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
