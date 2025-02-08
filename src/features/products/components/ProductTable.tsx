import React from "react";
import { useTable } from "react-table";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from '../style/Products.module.css'
import { Product } from "../types";

type ProductsTableProps = {
    columns: any;
    dataSource: Product[];
    fetchMoreData: () => void;
}
export const ProductTable: React.FC<ProductsTableProps> = ({ columns, dataSource, fetchMoreData }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: dataSource
    },
  );

  // Render the UI for your table
  return (
    <InfiniteScroll
      dataLength={rows.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading more 2 itens...</h4>}
    >
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </InfiniteScroll>
  );
}
