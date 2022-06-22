// module imports
const fs = require("fs");
const path = require("path");

const readDataFromFile = (fileName) => {
  const filePath = path.join(__dirname, `./${fileName}.json`);

  const data = fs.readFileSync(filePath, "utf8");

  return JSON.parse(data);
};

const writeDataFromFile = (fileName, data) => {
  console.log("recieved", data);
  const filePath = path.join(__dirname, `./${fileName}.json`);

  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = {
  readDataFromFile,
  writeDataFromFile,
};
