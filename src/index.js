const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
