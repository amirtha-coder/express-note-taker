const { Router } = require("express");
const {
  getNotes,
  deleteNotes,
  createNote,
} = require("../controllers/notes.js");

const router = Router();

router.get("/", getNotes);
router.delete("/:id", deleteNotes);
router.post("/", createNote);

module.exports = router;
