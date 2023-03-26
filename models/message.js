const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    content: String,
    author: String,
    added: Date,
  }, {collection: 'messages'})

// Export model
module.exports = mongoose.model("MessageModel", messageSchema);