import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const data = {
  nama: ["Bagas Rizky H P"],
  nim: ["02042111012"],
  alamat: ["Banjar"],
  kecamatan: ["Pataruman"],
  propinsi: ["Jawa Barat"],
  ttl: ["Banjar, 28 Oktober 2001"],
  jenis_kelamin: ["Laki-laki"],
  umur: ["20 Tahun"],
  agama: ["Islam"],
};

app.get("/api/index", (_req, res) => {
  res.send(data);
});

app.listen(3000, () => console.log("Lagi dijalanin nih.."));
