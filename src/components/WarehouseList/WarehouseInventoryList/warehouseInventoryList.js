import React, { useState } from 'react';
import DeleteInventoryModal from '../../DeleteInventoryModal/deleteInventoryModal';

import './warehouseInventoryList.scss'; 

function WarehouseInventoryList({ inventoryItems,onDeleteItem, onEditItem }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
console.log("ghscdiu",onEditItem);
  const showDeleteModal = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  }; 24

  const handleDelete = (itemId) => {
    console.log('Deleting item with id:', itemId);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="warehouse-inventory-list">
      <table>
        <thead>
          <tr>
            <th>INVENTORY ITEM</th>
            <th>CATEGORY</th>
            <th>STATUS</th>
            <th>QUANTITY</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td className={item.status === 'IN STOCK' ? 'in-stock' : 'out-of-stock'}>
                {item.status}
              </td>
              <td>{item.quantity}</td>
              <td>
                <button className="action-button" onClick={() => showDeleteModal(item)}>
                  🗑️
                </button>
                <button className="action-button" onClick={() => onEditItem(item.id)}>
                  ✏️
                </button>
              </td>
            </tr>
          ))}
            {selectedItem && (
        <DeleteInventoryModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={() => handleDelete(selectedItem.id)}
          itemName={selectedItem.name}
        />
      )}
        </tbody>
      </table>
    </div>
  );
}

export default WarehouseInventoryList;
