var express = require('express');
const router = express.Router() ;
var notectrl= require('../controller/note_controller');

router.get("/notes", notectrl.getAllNotes);
router.post("/notes/save", notectrl.saveNote);
router.put("/notes/update", notectrl.updateNote);
router.delete("/notes/delete/:noteId", notectrl.deleteNote);


module.exports = router;