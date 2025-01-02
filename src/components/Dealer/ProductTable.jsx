import React from "react";
import CustomTable from "@components/Common/CustomTable";
import { TableCell, TableRow } from "@mui/material";

const ProductTable = () => {
  const columns = [
    { field: "id", headerName: "ID", sortable: true },
    { field: "name", headerName: "Name", sortable: true },
    { field: "age", headerName: "Age", sortable: true },
    { field: "city", headerName: "City", sortable: false },
  ];

  const data = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 35, city: "Chicago" },
    { id: 4, name: "David", age: 40, city: "Houston" },
  ];

  const rowRenderer = (row, rowIndex) => (
    <TableRow key={rowIndex}>
      <TableCell>{row.id}</TableCell>
      <TableCell>
        <strong>{row.name}</strong>
      </TableCell>
      <TableCell>{row.age}</TableCell>
      <TableCell>{row.city}</TableCell>
    </TableRow>
  );

  return (
    <>
      <CustomTable columns={columns} data={data} rowRenderer={rowRenderer} />
    </>
  );
};

export default ProductTable;
