import React, { useState } from "react";

interface CreateModelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (model: { modelName: string; modelType: string; llm: string; description: string }) => void;
}

const CreateModelModal: React.FC<CreateModelModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [modelName, setModelName] = useState("");
  const [modelType, setModelType] = useState("");
  const [llm, setLlm] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newModel = { modelName, modelType, llm, description };
    onCreate(newModel); // Send data to Dashboard
    setModelName(""); // Clear input fields after creation
    setModelType("");
    setLlm("");
    setDescription("");
  };

  return (
    <div
      className="fixed inset-0 z-10000 bg-[#000000b3] bg-opacity-50 flex justify-center items-center overflow-y-auto"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="bg-white p-6 rounded shadow-lg w-full max-w-2xl mx-5 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-[#454545] text-2xl font-semibold mb-4 text-center">Create New Model</h2>

        <form onSubmit={handleCreate} className="flex flex-col gap-4">
          {/* Model Name */}
          <div className="flex flex-col gap-1 text-[#414141] text-lg">
            <label>Model Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              className="px-4 py-2 border border-[#D5D5D5] focus:ring-2 focus:ring-gray-400 focus:outline-none rounded"
              placeholder="Enter Model Name"
              required
            />
          </div>

          {/* Model Type (Dropdown) */}
          <div className="flex flex-col gap-1 text-[#414141] text-lg">
            <label>Model Type <span className="text-red-500">*</span></label>
            <select
              value={modelType}
              onChange={(e) => setModelType(e.target.value)}
              className="px-4 py-2 border border-[#D5D5D5] focus:ring-2 focus:ring-gray-400 focus:outline-none rounded"
              required
            >
              <option value="" disabled>Select Model Type</option>
              <option value="Extraction">Extraction</option>
              <option value="Classification">Classification</option>
              <option value="Prediction">Prediction</option>
              <option value="Segmentation">Segmentation</option>
            </select>
          </div>

          {/* LLM */}
          {/* LLM (Dropdown) */}
          <div className="flex flex-col gap-1 text-lg">
            <label className="text-[#414141]">LLM <span className="text-red-500">*</span></label>
            <select
              value={llm}
              onChange={(e) => setLlm(e.target.value)}
              className="px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none rounded"
              required
            >
              <option value="" disabled>Select LLM</option>
              <option value="GPT-4">GPT-4</option>
              <option value="GPT-3.5">GPT-3.5</option>
              <option value="BERT">BERT</option>
              <option value="T5">T5</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Model Description */}
          <div className="flex flex-col gap-1 text-[#414141] text-lg">
            <label>Model Description <span className="text-red-500">*</span></label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 border border-[#D5D5D5] focus:ring-2 focus:ring-gray-400 focus:outline-none rounded resize-none h-24"
              placeholder="Enter Description"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 w-full border border-[#EAEAF1] rounded-2xl text-[#7069BC] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#4F46E2] w-full border border-[#554DC2] rounded-2xl text-[#D5D3F0] cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModelModal;
