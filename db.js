const mongoose = require('mongoose');

//Mongoose Setup
mongoose.set('strictQuery', false);
const mongoDB = `mongodb+srv://mjgeko:${process.env.MONGODB_KEY}@cluster0.orfj6ha.mongodb.net/?retryWrites=true&w=majority`;
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}




async function saveModel(modelObj){
    try {
      await modelObj.save();
    } catch (error) {
      console.log(error);
    }
  }