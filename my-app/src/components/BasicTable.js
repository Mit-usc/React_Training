import { React, useMemo } from "react";
import "./table.css";
import { Link } from "react-router-dom";
import { useTable } from "react-table";

const columns_table = [
  {
    Header: "index",
    accessor: "id",
    Cell: ({ value }) => {
      return <Link to={`/edit/${value}`}>{value}</Link>;
    },
  },
  {
    Header: "To-Do List",
    accessor: "toDo",
  },
];

export const BasicTable = ({ data }) => {
  const columns = useMemo(() => columns_table, []);
  const tableData = useMemo(() => data, [data]);

  const tableInstance = useTable({
    columns: columns,
    data: tableData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
