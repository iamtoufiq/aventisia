import { useState } from "react";
import Filter from "../components/Filter";
import SortingTable from "../components/SortingTable";
import DefaultLayout from "../Layouts/DefaultLayout";
import CreateModelModal from "../components/CreateModelModal"; // Import modal
import MOCK_DATA from "../constant/MOCK_DATA.json";
interface ModelData {
  id: string;
  modelName: string;
  modelType: string;
  llm: string;
  description: string;
  createdOn: string;
  lastTrainedOn: string;
  status: string;
}

const Dashboard = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [data, setData] = useState([...MOCK_DATA, ...MOCK_DATA]);
  // Create Model Function
  const createModel = (newModel: ModelData) => {
    const generatedModel: ModelData = {
      id: `ID:#${Math.floor(1000000 + Math.random() * 9000000)}`, // Random 7-digit ID
      modelName: newModel.modelName || "Untitled Model",
      modelType: newModel.modelType || "Extraction",
      llm: newModel.llm || "GPT-4",
      description: newModel.description || "No description provided.",
      createdOn: new Date().toLocaleDateString("en-GB"), // Current date in DD/MM/YYYY
      lastTrainedOn: new Date().toLocaleDateString("en-GB"), // Same as createdOn
      status: "Active",
    };

    // Add the new model **at the beginning** of the data array
    setData((prevData) => [generatedModel, ...prevData]);

    setIsCreateModalOpen(false); // Close modal after creation
    console.log("New Model Created:", generatedModel);
  };

  return (
    <DefaultLayout>
      <div className="mx-5 lg:mx-6 my-7 lg:my-8 bg-white p-5 lg:p-7 mb-5 rounded-lg flex flex-col gap-5">
        {/* Header Section */}
        <div id="_header" className="flex items-center justify-between">
          <h4 className="font-semibold text-lg leading-[20.94px] text-[#4C4E55]">
            Model Library
          </h4>
          <button
            className="flex gap-[10px] bg-[#4F46E3] border-[#554DCF] px-3 py-2 text-[#B8B4E2] rounded-md cursor-pointer items-center"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <span>+</span>
            <span>Create New Model</span>
          </button>
        </div>

        <Filter />
        <SortingTable setData={setData} data={data} setIsCreateModalOpen={setIsCreateModalOpen} isCreateModalOpen={isCreateModalOpen} />
      </div>

      {/* Create New Model Modal */}
      <CreateModelModal onCreate={createModel} isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </DefaultLayout>
  );
};

export default Dashboard;
