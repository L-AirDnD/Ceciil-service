const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/offerings';
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database.');
});

const Schema = mongoose.Schema;

const offeringSchema = new Schema({
  offering_id: Number,
  photos: [{ url: String, caption: String }],
});

const Offering = mongoose.model('Offerings_Photo', offeringSchema);

module.exports = {
  Offering,
  offeringSchema,
};
