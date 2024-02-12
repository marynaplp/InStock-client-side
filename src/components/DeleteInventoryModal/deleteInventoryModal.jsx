import React from 'react';
import "./deleteInventorModal.scss"

const DeleteInventoryModal = ({ isOpen, onClose, onDelete, itemName }) => {
  if (!isOpen) return null; 

  return (
    <div className="delete-inventory-modal-overlay">
      <div className="delete-inventory-modal">
        <h2>Delete {itemName} inventory item?</h2>
        <p>Please confirm that you'd like to delete {itemName} from the inventory list. You won't be able to undo this action.</p>
        <div className="delete-inventory-modal-actions">
          <button className="delete-inventory-modal-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-inventory-modal-delete" onClick={() => { onDelete(); onClose(); }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteInventoryModal;
