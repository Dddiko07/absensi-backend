require("dotenv").config();
const express = require("express");
const cors = require("cors");

const absensiRoutes = require("./routes/absensi");

const app = express();
app.use(cors());
app.use(express.json());

// ROOT TEST (WAJIB)
app.get("/", (req, res) => {
  res.send("Absensi Backend OK 🚀");
});

// ROUTES
app.use("/absensi", absensiRoutes);

// PORT RAILWAY
const PORT = process.env.PORT || 5000;

// JANGAN NUNGGU DB
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
