# React Simple DataTable

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tentang direktori 

Semua Yang berkaitan pada code table (pagination, component, hooks, dll) ada pada **src/lib**

## Terkait Props

| nama props | type | default | description |
| ------------- | ------------- | -------- | ------------- |
| rowsPerPage | Array of Number | [5, 10, 25, 50, 100] | Jumlah baris data Yang ditampilkan setiap halaman pagination |
| column | Array of Object | [] | Kumpulan header atau judul dalam table, setiap object harus memiliki title & dataIndex (contoh lebih jelas di bawah) |
| column | Array of Object | [] | isi dari data berdasarkan dataIndex dalam table (contoh lebih jelas di bawah) |

## Contoh

```
import { Button } from "./lib/components/atoms";
import { TableSearch } from "./lib/template";

const column = [
  {
    title: "Kode Barang",
    dataIndex: "kode",
  },
  {
    title: "Nama",
    dataIndex: "nama",
  },
  {
    title: "Kategori",
    dataIndex: "kategori",
  },
  {
    title: "Jenis",
    dataIndex: "jenis",
  },
  {
    title: "Stok",
    dataIndex: "stok",
  },
  {
    title: "Harga",
    dataIndex: "harga",
  },
  {
    title: "Aksi",
    type: "Custom",
    cell: (row: any) => (
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Button backgroundColor="#3566E3" child="Lihat" />
        <hr style={{ marginLeft: 7, marginRight: 7 }} />
        <Button backgroundColor="#39AE44" child="Barcode" />
        <hr style={{ marginLeft: 7, marginRight: 7 }} />
        <Button backgroundColor="#39AE44" child="Harga" />
        <hr style={{ marginLeft: 7, marginRight: 7 }} />
        <Button backgroundColor="#F67E3B" child="Edit" />
        <hr style={{ marginLeft: 7, marginRight: 7 }} />
        <Button backgroundColor="#F63B3B" child="Delete" />
      </div>
    ),
  },
];

const data = [
  {
    kode: "BRG001",
    nama: "Kopi",
    kategori: "Biji",
    jenis: "Kopi",
    stok: "10",
    harga: 10000,
  },
  {
    kode: "BRG002",
    nama: "Susu",
    kategori: "Susu",
    jenis: "Susu",
    stok: "10",
    harga: 10000,
  },
];

function App() {
  return (
    <div className="App">
      <TableSearch
        rowsPerPage={[10, 25, 50, 100]}
        data={data}
        column={column}
      />
    </div>
  );
}

```

Dan Hasilnya akan seperti ini 
