const { Router } = require("express");
const {
  getNotes,
  deleteNotes,
  createNote,
} = require("../controllers/notes.js");

const router = Router();

router.get("/", getNotes);
router.get("/:id", deleteNotes);
router.get("/", createNote);

module.exports = router;
