import { useState, useEffect } from "react";
import SortingTable from "../components/SortingTable";
import DefaultLayout from "../Layouts/DefaultLayout";
import CreateModelModal from "../components/CreateModelModal";
import MOCK_DATA from "../constant/MOCK_DATA.json";
import CalendarIcon from "../icons/CalendarIcon";
import FilterIcon from "../icons/FilterIcon";

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
  const [searchTerm, setSearchTerm] = useState(""); // Search input
  const [filteredData, setFilteredData] = useState<ModelData[]>(data);

  // Debounce effect for search input
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredData(data);
      } else {
        setFilteredData(
          data.filter((model) =>
            model.modelName.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    }, 300); // 300ms debounce time

    return () => clearTimeout(handler);
  }, [searchTerm, data]);

  // Function to create a new model
  const createModel = (newModel: ModelData) => {
    const generatedModel: ModelData = {
      id: `ID:#${Math.floor(1000000 + Math.random() * 9000000)}`,
      modelName: newModel.modelName || "Untitled Model",
      modelType: newModel.modelType || "Extraction",
      llm: newModel.llm || "GPT-4",
      description: newModel.description || "No description provided.",
      createdOn: new Date().toLocaleDateString("en-GB"),
      lastTrainedOn: new Date().toLocaleDateString("en-GB"),
      status: "Active",
    };

    setData((prevData) => [generatedModel, ...prevData]);
    setIsCreateModalOpen(false);
    console.log("New Model Created:", generatedModel);
  };

  return (
    <DefaultLayout>
      <div className="mx-5 lg:mx-6 my-7 lg:my-8 bg-white p-5 lg:p-7 mb-5 rounded-lg flex flex-col gap-5">
        {/* Header Section */}
        <div id="_header" className="flex items-center justify-between">
          <h4 className="font-semibold text-lg hidden md:block leading-[20.94px] text-[#4C4E55]">
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

        {/* Search Input */}
        <div className="flex justify-between gap-[10px] items-center text-[#99999B]">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder={"Search"}
            className={`w-full rounded-sm bg-placeholder py-3 pl-12 pr-4 outline-0 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-500 placeholder:text-[#D2D6E2]`}
          />
          <div
            id="_filter"
            className="hidden lg:flex bg-placeholder items-center border-[#FEFEFE] border py-3 rounded-md px-4 gap-2 cursor-pointer"
          >
            <FilterIcon />
            <span>Filters</span>
          </div>
          <div
            id="_date-picker"
            className="hidden md:flex bg-placeholder items-center border-[#FEFEFE] border py-3 rounded-md px-4 gap-2 cursor-pointer"
          >
            <CalendarIcon />
            <span className="whitespace-nowrap">April 11-April 2</span>
          </div>
        </div>
        {/* Pass filteredData instead of data */}
        <SortingTable
          setData={setData}
          data={filteredData}
          setIsCreateModalOpen={setIsCreateModalOpen}
          isCreateModalOpen={isCreateModalOpen}
        />
      </div>

      <CreateModelModal
        onCreate={createModel}
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </DefaultLayout>
  );
};

export default Dashboard;
