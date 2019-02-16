const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/offering';
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

const retrieve = (err, cb) => {
  if (err) {
    console.log('There was an error in retrieve: ', err);
    return;
  }
  // Change offering_id to your choice of offering
  var query = Offering.where({ offering_id: 1008 });
  query.findOne(function (err, data) {
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
