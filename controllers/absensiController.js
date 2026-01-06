const pool = require("../config/db");

// GET DATA ABSENSI
exports.getAbsensi = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM absensi ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal mengambil data" });
  }
};

// TAMBAH ABSENSI
exports.addAbsensi = async (req, res) => {
  const { nama, nim, status } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO absensi (nama, nim, status) VALUES ($1, $2, $3) RETURNING *",
      [nama, nim, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal menambah data" });
  }
};
