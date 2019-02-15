const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/test';
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

// Refactor to filter by id
const retrieve = (err, cb) => {
  // console.log(id);
  if (err) {
    console.log('There was an error in retrieve: ', err);
    return;
  }
  Offering.find({ offering_id: 1003 })
    .exec((err, data) => {
      console.log('This is the data in database:', data)
      if (err) {
        console.log('There was an error in query: ', err);
        return;
      }
      cb(data);
    });
};

module.exports = {
  Offering,
  retrieve,
};
