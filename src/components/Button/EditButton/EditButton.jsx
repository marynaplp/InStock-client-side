import { ReactComponent as EditIcon } from "../../../Assets/Icons/edit-24px.svg";
import "../../Button/EditButton/EditButton.scss"
export default function EditButton({onClick}){
    return(
        <div className="Edit-icon" onClick={onClick}>
        <EditIcon className="Edit-icon-back" alt="edit" />
        <span className="Edit-icon-text">Edit</span>
      </div>
    );
}