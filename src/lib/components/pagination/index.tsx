import React, { useEffect } from "react";
import styles from "./Pagination.module.css";

const Pagination = (props: {
  range: any;
  setPage: any;
  page: number;
  slice: any;
}) => {
  useEffect(() => {
    if (props.slice.length < 1 && props.page !== 1) {
      props.setPage(props.page - 1);
    }
  }, [props]);
  return (
    <div className={styles.pagination}>
      {props.range.map((el: any, index: number) => (
        <button
          key={index}
          className={`${styles.button} ${
            props.page === el ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => props.setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
