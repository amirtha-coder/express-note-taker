// Global Declarations/ Importations
const { Router } = require("express");
const { renderStartPage, renderNotesPage } = require("../controllers/views");

const router = Router();

router.get("/", renderStartPage);
router.get("/notes", renderNotesPage);

module.exports = router;
