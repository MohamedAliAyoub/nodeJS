var express = require('express');
const router = express.Router() ;
var storectrl= require('../controller/store.contoller');

router.get("/store", storectrl.getStoriesList);
router.post("/store/save", storectrl.saveStore);
// router.put("/store/update", storectrl.updateNote);
// router.delete("/store/delete/:noteId", storectrl.deleteNote);


module.exports = router;