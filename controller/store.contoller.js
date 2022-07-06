var quiries = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../Util/utility');
exports.getStoriesList = async(req , res) => {
    try{
        var storeQuery= quiries.queryList.GET_STORE_LIST_QUERY;
        var result =  await dbConnection.dbQuery(storeQuery);

        return res.status(200).send(JSON.stringify(result.rows))
    }catch(err){
        console.log("Error : " + err);
        return res.status(500).send({error : "failed to list store "});
    }

    
};

exports.saveStore = async (req , res) => {
    try{
        var storeName = req.body.storeName;
        var createdBy = 'admin';
        var createdOn = new Date();
        var address = req.body.address;
        console.log("storeName : " + storeName   + " ----- address : " + address)
        if(!storeName || !address){
            return res.status(500).send({ error: 'store name and address are required , can not empty' })
        }
        
        var storeCode = util.generateStoreCode();
        values = [storeName , storeCode ,   createdOn , createdBy , address ]
        var saveStoreQuery= quiries.queryList.SAVE_STORE_QUERY;
        var result =  await dbConnection.dbQuery(saveStoreQuery ,values );


        res.status(201).send('save new store +');

    }catch(err){
        console.log("Error : " + err);
        return res.status(500).send({error : "failed to save store "});
    }
}