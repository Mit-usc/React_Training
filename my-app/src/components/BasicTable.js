import { React, useMemo } from "react";
import { useTable } from "react-table";
import "./table.css";

const columns_table = [
  {
    Header: "To-Do List",
    accessor: "to_do",
  },
];

var data_table = [
  {
    to_do: "synergize end-to-end systems",
  },
  {
    to_do: "optimize robust functionalities",
  },
  {
    to_do: "deliver one-to-one mindshare",
  },
  {
    to_do: "e-enable dot-com channels",
  },
  {
    to_do: "revolutionize extensible synergies",
  },
];

export const BasicTable = () => {
  const columns = useMemo(() => columns_table, []);
  const data = useMemo(() => data_table, []);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
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
