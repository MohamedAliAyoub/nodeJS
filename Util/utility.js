var randomstring = require("randomstring");

exports.generateStoreCode = ()=>{
    randomstring.generate({
        length: 12,
        charset: 'alphabetic',
        capitalization : 'uppercase',
      });

}
exports.dateFormat = () =>{
  return new Date(Date.now());
}