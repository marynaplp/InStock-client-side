import React from "react";
import "./deleteWarehouseModal.css"

const DeleteWarehouseModal = ({ isOpen, onClose, onDelete, warehouseName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Delete {warehouseName} warehouse?</h2>
        <p>Please confirm that you’d like to delete the {warehouseName} from the list of warehouses. You won’t be able to undo this action.</p>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={()=>{ onDelete(); onClose();}}>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default DeleteWarehouseModal;

