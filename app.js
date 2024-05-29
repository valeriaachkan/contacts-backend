//rqH4p3w3b1wm7ACN
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const DB_HOST =
  'mongodb+srv://Lera:rqH4p3w3b1wm7ACN@cluster0.hqkqztb.mongodb.net/reader?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
