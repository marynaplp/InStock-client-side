import { ReactComponent as EditIcon } from "../../../Assets/Icons/edit-24px.svg";
import "../../Button/EditButton/EditButton.scss"
export default function EditButton(){
    return(
        <div className="Edit-icon">
        <EditIcon className="Edit-icon-back" alt="edit" />
        <span className="Edit-icon-text">Edit</span>
      </div>
    );
}