// import packages
const { v4: uuidv4 } = require("uuid");
// const path = require("path");

// import modules
const { readDataFromFile, writeDataFromFile } = require("../utils");

const getNotes = (req, res) => {
  // get Notes from utils
  const notes = readDataFromFile("notes");

  // send notes as response
  return res.json(notes);
};
const createNote = (req, res) => {
  const { title, text } = req.body;
  console.log("create");

  const id = uuidv4();

  const note = {
    title,
    text,
    id,
  };

  const data = readDataFromFile("notes");

  console.log(data);

  data.push(note);

  writeDataFromFile("notes", data);

  return res.json(data);
};
const deleteNotes = (req, res) => {
  const targetID = req.params.id;

  const data = readDataFromFile("notes");

  const filteredNotes = data.filter((note) => note.id !== targetID);

  writeDataFromFile("notes", filteredNotes);

  return res.json(filteredNotes);
};

module.exports = { getNotes, createNote, deleteNotes };
