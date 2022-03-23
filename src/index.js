const express = require('express');
const env = require('dotenv');
const { bankRouter } = require('./routes/banks.routes');

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use('/bankDetails', bankRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/bankDetails/bankDetails`);
});
