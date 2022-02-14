import React from 'react';
import {useTable} from "react-table";


const Table = ({columns, data}) => {
    const tableInstance = useTable({columns, data});

    const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } = tableInstance;

    return (
        <table {...getTableProps()} className="min-w-full divide-y divide-black border border-black font-tahoma">
            <thead className="bg-mustard">
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} className="divide-x divide-black">
                    {headerGroup.headers.map(column => (
                        <th
                            scope="col"
                            className="px-1 py-3 text-left font-bold"
                            {...column.getHeaderProps()}
                        >
                            {
                                column.render("Header")
                            }
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-black"
            >
            {rows.map((row) => {  // new
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()} className="divide-x divide-black">
                        {row.cells.map(cell => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                    className="px-1 py-3 whitespace-nowrap"
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default Table;