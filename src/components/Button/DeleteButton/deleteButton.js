import React, { useState } from 'react';
import trashcan from '../../../Assets/Icons/delete_outline-24px.svg';

function DeleteButton({ renderModal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modal = renderModal(isModalOpen, () => setIsModalOpen(false));

  return (
    <>
      <img 
        src={trashcan} 
        alt="Delete" 
        className="delete-button" 
        onClick={() => setIsModalOpen(true)} 
      />
      {modal}
    </>
  );
}

export default DeleteButton;