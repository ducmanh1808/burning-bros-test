import React, { useState } from "react";
import styles from '../style/Products.module.css'
import { ProductTable } from "./ProductTable";

export const ProductList = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0);
    const { data, isFetching, refetch } = useGetPokemonByNameQuery(page);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName"
          },
          {
            Header: "Last Name",
            accessor: "lastName"
          }
        ]
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age"
          },
          {
            Header: "Visits",
            accessor: "visits"
          },
          {
            Header: "Status",
            accessor: "status"
          },
          {
            Header: "Profile Progress",
            accessor: "progress"
          }
        ]
      }
    ],
    []
  );

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(items.concat([]));
    }, 1500);
  };

  const data = React.useMemo(() => items, [items]);

  return (
    <div className={styles.container}>
      <ProductTable columns={columns} dataSource={data} update={fetchMoreData} />
    </div>
  );
}