const mongoose = require('mongoose');
const MessageModel = require('./models/message.js');
//Mongoose Setup - runs when require is called
mongoose.set('strictQuery', false);
const mongoDB = `mongodb+srv://mjgeko:${process.env.MONGODB_KEY}@cluster0.orfj6ha.mongodb.net/?retryWrites=true&w=majority`;
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


async function saveMessage(obj) {
    const newMessage = new MessageModel({
        content: obj.content,
        author: obj.author,
        added: new Date(),
    })
    
    await saveModel(newMessage);
}

async function saveModel(modelObj){
    try {
      await modelObj.save();
    } catch (error) {
      console.log(error);
    }
}

async function getMessages(){
    const messages = await MessageModel.find();
    console.log(messages);
    return(messages);
}

module.exports = {saveModel, saveMessage, getMessages};