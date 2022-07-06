 
var sequential = require("sequential-ids");
 
var generator = new sequential.Generator({
  digits: 6, letters: 3,
//   store: function(key, ids) {
//     db.store(key, ids[ids.length - 1]);
//   },
  restore: "AAB - 000"
});
 module.exports = generator