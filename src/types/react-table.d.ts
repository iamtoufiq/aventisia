import { UseSortByColumnProps } from "react-table";

declare module "react-table" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ColumnInstance<D extends object = {}> extends UseSortByColumnProps<D> {}
}
