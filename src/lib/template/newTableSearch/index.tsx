import styles from "./NewTableSearch.module.css";
import { useState } from "react";
import { Loader, Text, TextField } from "../../components/atoms";
import AllTable from "../../components/table";

export default function TableSearch(props: {
  data: any[];
  column: any[];
  rowsPerPage: number[];
}) {
  const [databody, setdataBody] = useState(props.data);
  const [limit, setLimit] = useState(props.rowsPerPage[0]);

  const handleSearch = (e: any) => {
    const i = props.column.length;
    const search = e.target.value;
    // eslint-disable-next-line array-callback-return
    const newdata = props.data.filter((item: any) => {
      for (let j = 0; j < i; j++) {
        if (typeof item[props.column[j].dataIndex] === "string") {
          if (
            item[props.column[j].dataIndex]
              .toLowerCase()
              .includes(search.toLowerCase())
          ) {
            return true;
          }
        }
      }
    });
    setdataBody(newdata);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <Text
              fontWeight="500"
              fontSize="18px"
              color="#52525B"
              child="Baris Per Halaman"
              textDecoration="underline"
              lineHeight="28px"
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <select
                onChange={(e: any) => setLimit(e.target.value)}
                style={{
                  border: "none",
                  marginLeft: "10px",
                  fontSize: "15px",
                  backgroundColor: "transparent",
                }}
                name="cars"
                id="cars"
              >
                {props.rowsPerPage.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              margin: "0px 10px",
            }}
          >
            <TextField
              onInput={handleSearch}
              placeholder="Pencarian"
              styleInput={{ marginRight: "20px" }}
              type="search"
              otherStyle={{ marginRight: "20px" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableWrapper}>
        {props.data.length > 0 ? (
          <>
            <AllTable
              rowPerPage={limit}
              data={databody}
              header={props.column}
            />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
            }}
          >
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}
