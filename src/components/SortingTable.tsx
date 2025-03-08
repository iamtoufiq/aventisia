import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  Column,
  TableInstance,
  TableState,
  UsePaginationInstanceProps,
  UsePaginationState,
} from "react-table";
import { ModelData } from "../constant/columns";
import DeleteConfirmationModal from "./DeleteConfirmationModal"; // Import the modal
import ActionIcon from "../icons/ActionIcon";
import LeftIcon from "../icons/LeftIcon";

interface SortingTableProps {
  setIsCreateModalOpen: (isOpen: boolean) => void;
  isCreateModalOpen: boolean;
  data: ModelData[];
  setData: React.Dispatch<React.SetStateAction<ModelData[]>>;
}

const SortingTable: React.FC<SortingTableProps> = ({
  setIsCreateModalOpen,
  isCreateModalOpen,
  data,
  setData,
}) => {
  console.log(setIsCreateModalOpen, isCreateModalOpen);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const openDeleteModal = (id: string) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  const handleDelete = () => {
    if (selectedId) {
      setData((prevData) => prevData.filter((item) => item.id !== selectedId));
    }
    closeDeleteModal();
  };

  const columns: Column<ModelData>[]  = useMemo(
    () => [
      { Header: "Model Name", accessor: "modelName" },
      { Header: "Model Type", accessor: "modelType" },
      { Header: "Description", accessor: "description" },
      { Header: "Created On", accessor: "createdOn" },
      { Header: "Last Trained On", accessor: "lastTrainedOn" },
      { Header: "Status", accessor: "status" },
      {
        Header: "Action",
        accessor: "id",
        Cell: ({ row }: { row: { original: ModelData } }) => (
          <button
            onClick={() => openDeleteModal(row.original.id)}
            className="p-2 cursor-pointer"
          >
            <ActionIcon />
          </button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    gotoPage,
    state,
    page,
  } = useTable<ModelData>(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 9,
      } as Partial<TableState<ModelData> & UsePaginationState<ModelData>>,
    },
    useSortBy,
    usePagination
  ) as TableInstance<ModelData> & UsePaginationInstanceProps<ModelData>;

  const { pageIndex, pageSize } = state as TableState<ModelData> &
    UsePaginationState<ModelData>;

  return (
    <>
      <table {...getTableProps()} className="w-full border-collapse overflow-auto">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="text-left text-[#5C5C5C] leading-[16.34px] text-sm"
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
              style={{ borderBottom: "3px solid #F2F2FB" }}
            >
              {headerGroup.headers.map((column: ColumnInstance<ModelData>) => {
                return (
                  <th
                    className="p-2"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={column.id}
                  >
                    {column.render("Header")}
                    {column.canSort && (
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                className="text-[#6A6A6A] text-[13.5px]"
                {...row.getRowProps()}
                key={row.id}
                style={{ borderBottom: "3px solid #F2F2FB" }}
              >
                {row.cells.map((cell, index) => (
                  <td
                    className={`p-2 ${index === row.cells.length - 1 ? "text-center" : ""}`}
                    {...cell.getCellProps()}
                    key={cell.column.id}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex flex-col lg:flex-row gap-2 items-center justify-between w-full mt-4">
        {/* Dynamic Pagination Info */}
        <p className="text-[#787E88] text-sm" id="_left">
          {`Showing ${pageIndex * pageSize + 1} to ${Math.min(
            (pageIndex + 1) * pageSize,
            data.length
          )} of ${data.length} results`}
        </p>

        {/* Pagination Buttons */}
        <div className="pagination flex justify-center gap-2">
          <button
            onClick={previousPage}
            disabled={!canPreviousPage}
            className={`${canPreviousPage ? "cursor-pointer" : "opacity-50"}`}
          >
            <LeftIcon />
          </button>

          {pageOptions.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => gotoPage(pageNumber)}
              className={`px-3 py-1 rounded-full ${
                pageIndex === pageNumber ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {pageNumber + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            disabled={!canNextPage}
            className={`${canNextPage ? "cursor-pointer" : "opacity-50"}`}
          >
            <LeftIcon isFlip={true} />
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal isOpen={isModalOpen} onClose={closeDeleteModal} onConfirm={handleDelete} />
    </>
  );
};

export default SortingTable;
