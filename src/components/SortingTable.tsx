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
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import ActionIcon from "../icons/ActionIcon";
import LeftIcon from "../icons/LeftIcon";
import UpDownIcon from "../icons/UpDownIcon";

interface SortingTableProps {
  data: ModelData[];
  setData: React.Dispatch<React.SetStateAction<ModelData[]>>;
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateModalOpen: boolean;
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

  const columns: Column<ModelData>[] = useMemo(
    () => [
      {
        Header: "Model Name",
        accessor: "modelName",
        Cell: ({ row }) => (
          <div className="flex flex-col">
            <span className="text-[#585858] font-semibold">
              {row.original.modelName}
            </span>
            <span className="text-[#9D9D9D] font-semibold  text-[12.2px]">
              {row.original.id}
            </span>
          </div>
        ),
      },

      { Header: "Model Type", accessor: "modelType" },
      { Header: "Description", accessor: "description" },
      { Header: "Created On", accessor: "createdOn" },
      { Header: "Last Trained On", accessor: "lastTrainedOn" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          const statusColors: { [key: string]: string } = {
            Active: "bg-green-200 text-green-800",
            Inactive: "bg-red-200 text-red-800",
            Pending: "bg-yellow-200 text-yellow-800",
          };

          return (
            <span
              className={`px-2 py-1 rounded-md ${
                statusColors[value] || "bg-gray-200"
              }`}
            >
              {value}
            </span>
          );
        },
      },
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
      <table
        {...getTableProps()}
        className="w-full border-collapse overflow-auto overflow-x-scroll max-w-[90vw] lg:mawul"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="text-left text-[#5C5C5C] leading-[16.34px] text-sm"
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
              style={{ borderBottom: "3px solid #F2F2FB" }}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className="p-2"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                >
                  {column.render("Header")}
                  {column.canSort && (
                    <span className="inline-block ml-1">
                      <UpDownIcon />
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="p-4 text-center text-red-600 font-bold text-2xl"
              >
                No data found
              </td>
            </tr>
          ) : (
            page.map((row) => {
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
                      className={`p-2 text-[#585858] font-semibold ${
                        index === row.cells.length - 1 ? "text-center" : ""
                      }`}
                      {...cell.getCellProps()}
                      key={cell.column.id}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {data.length > 0 && (
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-between w-full mt-4">
          <p className="text-[#787E88] text-sm" id="_left">
            {`Showing ${pageIndex * pageSize + 1} to ${Math.min(
              (pageIndex + 1) * pageSize,
              data.length
            )} of ${data.length} results`}
          </p>

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
                  pageIndex === pageNumber
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
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
      )}

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default SortingTable;
