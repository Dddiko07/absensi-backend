const express = require("express");
const cors = require("cors");
require("dotenv").config();

const absensiRoutes = require("./routes/absensi");

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 ROOT ROUTE (WAJIB)
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Absensi Backend is running 🚀",
  });
});

// 🔹 API ROUTES
app.use("/absensi", absensiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
