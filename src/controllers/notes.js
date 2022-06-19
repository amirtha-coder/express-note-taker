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
  console.log("delete");

  const id = uuidv4();

  const note = {
    title,
    text,
    id,
  };

  const data = readDataFromFile("notes");

  data.notes.push(note);

  writeDataFromFile("notes", data);

  return res.json();
};
const deleteNotes = (req, res) => {
  console.log("create");
};

module.exports = { getNotes, createNote, deleteNotes };
