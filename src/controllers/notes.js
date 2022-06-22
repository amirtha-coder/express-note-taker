// import packages
const { v4: uuidv4 } = require("uuid");
// const path = require("path");

// import modules
const { readDataFromFile, writeDataFromFile } = require("../utils");

const getNotes = (req, res) => {
  // get Notes from utils
  const notes = readDataFromFile("../db/db");

  // send notes as response
  return res.json(notes);
};
const createNote = (req, res) => {
  const { title, text } = req.body;

  const id = uuidv4();

  const note = {
    title,
    text,
    id,
  };

  let data = readDataFromFile("../db/db");

  data.push(note);

  writeDataFromFile("../db/db", data);

  return res.json(data);
};
const deleteNotes = (req, res) => {
  const targetID = req.params.id;

  const data = readDataFromFile("../db/db");

  const filteredNotes = data.filter((note) => note.id !== targetID);

  const datas = writeDataFromFile("../db/db", filteredNotes);

  return res.json(filteredNotes);
};

module.exports = { getNotes, createNote, deleteNotes };
