const dbConfig = require("../config/db.config")

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// creating the object or Json of DB Config
const db = {}
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require('./tutorial.model.js')(mongoose);


// Export Db config from this whole file
module.exports = db;
