// const { json } = require("body-parser");
// router.get("/notes", notectrl.getAllNotes);
var generator=  require("../Util/generator");
var memStorage=  require("../Util/memory.storage");
var module = require('../model/note_model');
exports.getAllNotes =(req , res) => {
    var values = memStorage.getValues(memStorage.store);
    console.log(JSON.stringify(values));
    return res.send('get all notes.....' + JSON.stringify(values));
}

exports.saveNote =(req , res) => {
    var new_id_1   = generator.generate();           // => AAB - 001
    var title = req.body.title;
    var content = req.body.content;
    var createdBy = 'admin';
    var createdOn = new Date();
    
    if(!title || !content){
       return res.status(500).send('error500 00');
    }
    var Note = module.Note;
    var noteObj = new Note(new_id_1 , title , content , createdBy , createdOn);


    memStorage.store.setItem(new_id_1 , noteObj);

    res.status(201).send('save new note +');
}


exports.updateNote =(req , res) => {

    var noteId = req.body.noteId;
    var title = req.body.title;
    var content = req.body.content;
    var createdBy = 'admin';
    var createdOn = new Date();
  
    if(!noteId ){
        return res.status(500).send('noted id is required');
     }
    if(!title || !content){
       return res.status(500).send('error500 00');
    }
    var Note = module.Note;
    var noteObj = new Note(noteId , title , content , createdBy , createdOn);
    var noteItem = memStorage.store.getItem(noteId);
    if(!noteItem){
        return res.status(500).send('noted id is not exist');

    }

    memStorage.store.setItem(noteId , noteObj);

    res.status(200).send('save updated note +');
}

exports.deleteNote =(req , res) => {
    var noteId= req.params.noteId;
    if(!noteId){
        return res.status(500).send('noted id is not exist');

    }
    var noteItem = memStorage.store.getItem(noteId);
    if(!noteItem){
        return res.status(500).send('noted id is not exist');

    }
    memStorage.store.removeItem(noteId);

    res.send('delete  note .....');
}