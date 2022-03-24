const services = require('../services/banks.services');

const insertBankDetails = async (req, res) => {
  try {
    const banks = await services.insertBankDetails();
    res.json({
      'banks are': banks,
    }).status(200);
  } catch (err) {
    res.status(500).json({ error: `There's something wrong!  Failed: \n Error: ${err.message}` });
  }
};
const getBankNames = async (req, res) => {
  try {
    const bankNames = await services.getBankNames();
    res.json({
      bankNames,
    }).status(200);
  } catch (err) {
    res.status(500).json({ error: `There's something wrong!  Failed: \n Error: ${err.message}` });
  }
};
const getBranches = async (req, res) => {
  try {
    const bankBranches = await services.getBranches(req.params.bankName);
    res.json({
      bankBranches,
    }).status(200);
  } catch (err) {
    res.status(500).json({ error: `There's something wrong!  Failed: \n Error: ${err.message}` });
  }
};
const getBankDetails = async (req, res) => {
  try {
    const bankDetails = await services.getBankDetails(req.params.ifsc);
    res.json({
      bankDetails,
    }).status(200);
  } catch (err) {
    res.status(err.code).json({ error: `There's something wrong!  Failed: \n Error: ${err.message}` });
  }
};
const getIfsc = async (req, res) => {
  try {
    const ifsc = await services.getIfsc(req.params.bankName, req.params.branchName);
    console.log(ifsc);
    res.json({
      ifsc,
    }).status(200);
  } catch (err) {
    res.status(err.code).json({ error: `There's something wrong!  Failed: \n Error: ${err.message}` });
  }
};
module.exports = {
  insertBankDetails,
  getBankNames,
  getBranches,
  getBankDetails,
  getIfsc,
};
