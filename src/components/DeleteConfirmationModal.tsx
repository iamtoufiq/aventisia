import React from "react";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10000 bg-[#000000b3] bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
        <p className="mb-4">Do you really want to delete this record?</p>
        <div className="flex justify-center gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
