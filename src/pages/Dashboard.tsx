import { useState, useEffect } from "react";
import SortingTable from "../components/SortingTable";

import DefaultLayout from "../Layouts/DefaultLayout";
import CreateModelModal from "../components/CreateModelModal";
import CalendarIcon from "../icons/CalendarIcon";
import FilterIcon from "../icons/FilterIcon";
import MOCK_DATA from "../constant/MOCK_DATA.json";

import HeadingSecondary from "../components/HeadingSecondary";
import ButtonPrimary from "../components/ButtonPrimary";
import SearchInput from "../components/SearchInput";

export interface ModelData {
  id: string;
  modelName: string;
  modelType: string;
  llm: string;
  description: string;
  createdOn: string;
  lastTrainedOn: string;
  status: string;
}

// Define type for partial data from the modal
interface NewModelInput {
  modelName: string;
  modelType: string;
  llm: string;
  description: string;
}

const Dashboard = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  // Transform MOCK_DATA to include llm
  const [data, setData] = useState<ModelData[]>(
    [...MOCK_DATA].map((item: Partial<ModelData>) => ({
      ...item,
      llm: item.llm ?? "GPT-4", // Properly handle missing 'llm'
    })) as ModelData[]
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<ModelData[]>(data);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredData(data);
      } else {
        setFilteredData(
          data.filter(
            (model) =>
              model.modelName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              model.id.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm, data]);

  const createModel = (newModel: NewModelInput) => {
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
  };

  return (
    <DefaultLayout>
      <div className="mx-5 lg:mx-6 my-7 lg:my-8 bg-white p-5 lg:p-7 mb-5 rounded-lg flex flex-col gap-5">
        <div id="_header" className="flex items-center justify-between">
          <HeadingSecondary text="Model Library" />
          <ButtonPrimary onClick={() => setIsCreateModalOpen(true)}>
            <span>+</span>
            <span>Create New Model</span>
          </ButtonPrimary>
        </div>

        <div className="flex justify-between gap-[10px] items-center text-[#99999B]">
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            placeholder="Search by Name, ID"
          />
          <ButtonPrimary className="hidden lg:flex bg-placeholder items-center border-[#FEFEFE] bg-[#F2F2FB] border py-3 rounded-md px-4 gap-2 cursor-pointer">
            <FilterIcon />
            <span className="text-[#9A9A9C]">Filters</span>
          </ButtonPrimary>
          <ButtonPrimary className="hidden md:flex bg-placeholder items-center bg-[#F2F2FB] border-[#FEFEFE] border py-3 rounded-md px-4 gap-2 cursor-pointer">
            <CalendarIcon />
            <span className="whitespace-nowrap text-[#9A9A9C]">
              April 11-April 2
            </span>
          </ButtonPrimary>
        </div>

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
