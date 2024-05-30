const express = require('express');
const mongoose = require('mongoose');

const app = express();

const { DB_HOST } = process.env;

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
