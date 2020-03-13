const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create Schema and Model

const MarioCharSchema = new Schema({
    docID : String,
    docTitle : Number,
    TFIDF : []
});

const MarioChar = mongoose.model("mariochar",MarioCharSchema);

module.exports  = MarioChar;
 
// var myChar = new MarioChar()