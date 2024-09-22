"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Product } from "@/@types/products";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 140 },
  { field: "description", headerName: "Description", width: 540 },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 120,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 100,
  },
  {
    field: "productCategory",
    headerName: "Category ID",
    type: "number",
    width: 100,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

type Props = {
  data: Product[];
};

export default function ProductsTable({ data }: Props) {
  return (
    <Paper sx={{ height: "400", width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
