const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv')

dotenv.config();

const PORT = process.env.PORT_NUMBER || 5000
const DB_URI = process.env.DATABASE_URL


// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    DB_URI
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT, () => console.log("Server running"));
  })
  .catch((err) => console.log(err));
