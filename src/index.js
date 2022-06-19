const express = require("express");
const path = require("path");

const PORT = 4000;
const app = express();

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
