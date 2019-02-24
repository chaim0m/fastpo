const express = require('express');
const mongodb = require('mongodb');
const db = process.env.MONGODB_URI;
const router = express.Router();

router.get('/', async (req, res) => {
  debugger;
  console.log(db);
  const users = await loadUsersCollection();
  res.send(await users.find({}).toArray());
});

async function loadUsersCollection() {
  const client = await mongodb.MongoClient.connect(db,
    { useNewUrlParser: true }
  );
  return client.db('test').collection('Users');
}
module.exports = router;
