// const {i} = require('mongoose');
const { Offering } = require('./database/index.js');


const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

let id = 0;

const createDocs = () => {
  let docs = [];
  for (let i = 0; i < 101; i += 1) {
    const offering = new Offering(
      {
        offering_id: (1000 + (++id)),
        photos: [
          { url: `https://s3-us-west-1.amazonaws.com/lair-dnd/cat${getRandomInt(101)}.jpg`, caption: 'placeholder' },
          { url: `https://s3-us-west-1.amazonaws.com/lair-dnd/cat${getRandomInt(101)}.jpg`, caption: 'placeholder' },
          { url: `https://s3-us-west-1.amazonaws.com/lair-dnd/cat${getRandomInt(101)}.jpg`, caption: 'placeholder' },
          { url: `https://s3-us-west-1.amazonaws.com/lair-dnd/cat${getRandomInt(101)}.jpg`, caption: 'placeholder' },
          { url: `https://s3-us-west-1.amazonaws.com/lair-dnd/cat${getRandomInt(101)}.jpg`, caption: 'placeholder' },
          { url: `https://s3-us-west-1.amazonaws.com/lair-dnd/cat${getRandomInt(101)}.jpg`, caption: 'placeholder' },
          { url: `https://s3-us-west-1.amazonaws.com/lair-dnd/cat${getRandomInt(101)}.jpg`, caption: 'placeholder' },
          { url: `https://s3-us-west-1.amazonaws.com/lair-dnd/cat${getRandomInt(101)}.jpg`, caption: 'placeholder' },
          { url: `https://s3-us-west-1.amazonaws.com/lair-dnd/cat${getRandomInt(101)}.jpg`, caption: 'placeholder' },
          { url: `https://s3-us-west-1.amazonaws.com/lair-dnd/cat${getRandomInt(101)}.jpg`, caption: 'placeholder' },
        ],
      }
    );
    docs.push(offering);
  }
  return docs;
};

const createdDocs = createDocs();

const docGenerator = (array) => {
  console.log(Offering.insertMany());
  Offering.insertMany(array, (err, result) => {
    if (err) {
      console.log('This is an error.');
    } else {
      console.log('You seeded your database!', result);
    }
  });
};

docGenerator(createdDocs);
