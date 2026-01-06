const db = require("../config/db");

exports.getAllAbsensi = async (req, res) => {
  const result = await db.query("SELECT * FROM absensi ORDER BY id DESC");
  res.json(result.rows);
};

exports.createAbsensi = async (req, res) => {
  const { nama, nim, tanggal, status } = req.body;
  await db.query(
    "INSERT INTO absensi (nama, nim, tanggal, status) VALUES ($1,$2,$3,$4)",
    [nama, nim, tanggal, status]
  );
  res.json({ message: "Data berhasil ditambahkan" });
};

exports.updateAbsensi = async (req, res) => {
  const { id } = req.params;
  const { nama, nim, tanggal, status } = req.body;
  await db.query(
    "UPDATE absensi SET nama=$1, nim=$2, tanggal=$3, status=$4 WHERE id=$5",
    [nama, nim, tanggal, status, id]
  );
  res.json({ message: "Data berhasil diupdate" });
};

exports.deleteAbsensi = async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM absensi WHERE id=$1", [id]);
  res.json({ message: "Data berhasil dihapus" });
};
