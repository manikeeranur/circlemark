import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";

const CustomTable = ({ columns, data, rowRenderer }) => {
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (field) => {
    const isAsc = sortField === field && sortDirection === "asc";
    setSortField(field);
    setSortDirection(isAsc ? "desc" : "asc");
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <TableContainer component={Paper} className="shadow-none">
      <Table className="custom-table border table table-striped">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field} className="fw-bold">
                {column.sortable ? (
                  <TableSortLabel
                    active={sortField === column.field}
                    direction={
                      sortField === column.field ? sortDirection : "asc"
                    }
                    onClick={() => handleSort(column.field)}
                  >
                    {column.headerName}
                  </TableSortLabel>
                ) : (
                  column.headerName
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, rowIndex) =>
            rowRenderer ? (
              rowRenderer(row, rowIndex)
            ) : (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.field}>{row[column.field]}</TableCell>
                ))}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
