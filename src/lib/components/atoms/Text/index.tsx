/*

------------HOW TO USE COMPONENT TEXT--------------

* = requiered 

nama props || type || default || description

1. child* || String || "" || Teks Yang Akan Ditampilkan

2. fontWeight || String || "400" || Tebal Teks

3. fontSize || String || "14px" || Ukuran Teks 

4. color || String || "#9fa2b4" || Warna Text

5. textDecoration || String || "none" || Tipe Decoration Teks

6. textAlign || String || "left" || Posisi Horizontal Teks

7. lineHeight || String || "20px" || Tinggi Teks

8. other || object || {} || styling tambahan pada text

----Contoh----

<Text lineHeight="40px" fontSize="42px" color="#fff" fontWeight="700" child="Hello World" />

*/

import styles from "./Text.module.css";

export default function Text(props: {
  child: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  textDecoration?: string;
  textAlign?: string;
  lineHeight?: string;
  other?: any;
}) {
  return (
    <p
      style={{
        fontWeight: props.fontWeight || "400",
        fontSize: props.fontSize || "14px",
        color: props.color || "#9fa2b4",
        textDecoration: props.textDecoration || "none",
        textAlign: props.textAlign || "left",
        lineHeight: props.lineHeight || "20px",
        ...props.other,
      }}
      className={styles.text}
    >
      {props.child}
    </p>
  );
}
