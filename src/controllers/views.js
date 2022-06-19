const path = require("path");

const renderStartPage = (req, res) => {
  // get the filepath
  const filePath = path.join(__dirname, "../../public/index.html");

  // send file path
  return res.sendFile(filePath);
};

const renderNotesPage = (req, res) => {
  // get the filepath
  const filePath = path.join(__dirname, "../../public/notes.html");

  // send file path
  return res.sendFile(filePath);
};

module.exports = { renderStartPage, renderNotesPage };
