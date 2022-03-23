const express = require('express');
const handlers = require('../handlers/banks.handlers');

const bankRouter = express.Router();
bankRouter.get('/insertBanks', handlers.insertBankDetails);
bankRouter.get('/getBankNames', handlers.getBankNames);
bankRouter.get('/getBranches/:bankName', handlers.getBranches);
bankRouter.get('/getIfsc/:bankName/:branchName', handlers.getIfsc);
bankRouter.get('/getBankDetails/:ifsc', handlers.getBankDetails);
module.exports = {
  bankRouter,
};
