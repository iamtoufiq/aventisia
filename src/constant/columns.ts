import { Column } from 'react-table';
export interface ModelData {
    id: string;
    llm: string;
    modelName: string;
    modelType: string;
    createdOn: string;
    lastTrainedOn: string;
    status: string;
    description:string
  }


export const COLUMNS: Column<ModelData>[] = [
  {
    Header: 'Model Name',
    accessor: 'modelName',
  },
  {
    Header: 'Model Type',
    accessor: 'modelType',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Created On',
    accessor: 'createdOn',
  },
  {
    Header: 'Last Trained On',
    accessor: 'lastTrainedOn',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Action',
    accessor: 'id',
  },
];
