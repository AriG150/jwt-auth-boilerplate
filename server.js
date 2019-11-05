require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection; 
db.once('open', () => {
  console.log(` 💫 Connected to MongoDB on ${db.host}: ${db.port}...`);
});
db.on('err', (err) => {
  consolelog(`🚨 Database error:\n${err}`);
});

app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
  console.log(` 🎧 You are listening on port ${process.env.PORT}`)
});
