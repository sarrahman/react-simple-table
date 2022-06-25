import { useEffect, useState } from "react";
import { useTable } from "../../hooks";
import Pagination from "../pagination";
import styles from "./AllTable.module.css";

export default function AllTable(props: {
  data: any[];
  header: any[];
  rowPerPage: number;
}) {
  const [data, setData] = useState(props.data);
  const column = props.header || [];
  const [sorted, setSorted] = useState("");
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, props.rowPerPage);

  const handleSort = (dataIndex: string) => {
    if (sorted === dataIndex) {
      setData(data.reverse());
      setSorted("");
    } else {
      setData(
        data.sort((a, b) => {
          if (a[dataIndex] < b[dataIndex]) {
            return -1;
          }
          if (a[dataIndex] > b[dataIndex]) {
            return 1;
          }
          return 0;
        })
      );
      setSorted(dataIndex);
    }
  };

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {column.map((item, index) => (
            <th
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleSort(item.dataIndex)}
              key={index}
              className={styles.th}
            >
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#A1A1AA",
                  lineHeight: "16px",
                  textDecoration: "underline",
                  textAlign: "center",
                }}
              >
                {item.title}
              </p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {slice.map((item, index) => (
          <tr key={index}>
            {column.map((itemColumn, indexColumn) => (
              <td key={indexColumn} className={styles.td}>
                {itemColumn.type !== "Custom" ? (
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      color: "#1F4173",
                      textAlign: "center",
                    }}
                  >
                    {item[itemColumn.dataIndex]}
                  </p>
                ) : (
                  itemColumn.cell(item, index)
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <Pagination range={range} slice={slice} setPage={setPage} page={page} />
    </table>
  );
}
