import "./App.css";
import { Button, Text } from "./lib/components/atoms";
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
    nama: "Kopi",
    kategori: "Biji",
    jenis: "Kopi",
    stok: "10",
    harga: 10000,
  },
  {
    kode: "BRG003",
    nama: "Susu",
    kategori: "Susu",
    jenis: "Susu",
    stok: "10",
    harga: 10000,
  },
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
    nama: "Kopi",
    kategori: "Biji",
    jenis: "Kopi",
    stok: "10",
    harga: 10000,
  },
  {
    kode: "BRG003",
    nama: "Susu",
    kategori: "Susu",
    jenis: "Susu",
    stok: "10",
    harga: 10000,
  },
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
    nama: "Kopi",
    kategori: "Biji",
    jenis: "Kopi",
    stok: "10",
    harga: 10000,
  },
  {
    kode: "BRG003",
    nama: "Susu",
    kategori: "Susu",
    jenis: "Susu",
    stok: "10",
    harga: 10000,
  },
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
    nama: "Kopi",
    kategori: "Biji",
    jenis: "Kopi",
    stok: "10",
    harga: 10000,
  },
  {
    kode: "BRG003",
    nama: "Susu",
    kategori: "Susu",
    jenis: "Susu",
    stok: "10",
    harga: 10000,
  },
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
    nama: "Kopi",
    kategori: "Biji",
    jenis: "Kopi",
    stok: "10",
    harga: 10000,
  },
  {
    kode: "BRG003",
    nama: "Susu",
    kategori: "Susu",
    jenis: "Susu",
    stok: "10",
    harga: 10000,
  },
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
    nama: "Kopi",
    kategori: "Biji",
    jenis: "Kopi",
    stok: "10",
    harga: 10000,
  },
  {
    kode: "BRG003",
    nama: "Susu",
    kategori: "Susu",
    jenis: "Susu",
    stok: "10",
    harga: 10000,
  },
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
    nama: "Kopi",
    kategori: "Biji",
    jenis: "Kopi",
    stok: "10",
    harga: 10000,
  },
  {
    kode: "BRG003",
    nama: "Susu",
    kategori: "Susu",
    jenis: "Susu",
    stok: "10",
    harga: 10000,
  },
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
    nama: "Kopi",
    kategori: "Biji",
    jenis: "Kopi",
    stok: "10",
    harga: 10000,
  },
  {
    kode: "BRG003",
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

export default App;
