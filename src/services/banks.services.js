const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const models = require('../../models');

const insertBankDetails = async () => {
  fs.readFile(path.resolve('/Users/Vriti_Satija/Desktop/BankingSystem/src/fixtures/ifsc.json'), 'utf8', async (err, data) => {
    if (err) {
      return;
    }
    try {
      const bankDetails = JSON.parse(data);

      const updatedBankDetails = bankDetails.map((detail) => {
      // eslint-disable-next-line no-param-reassign
        detail.STD_CODE = detail['STD CODE'];
        return detail;
      });
      models.BankDetails.destroy({
        where: {},
        truncate: true,
      });
      await models.BankDetails.bulkCreate(updatedBankDetails);
    } catch (errr) {
      console.log('Error parsing JSON string:', errr);
    }
  });
};
const getBankNames = async () => {
  const bankNames = await models.BankDetails.findAll({
    attributes: [
      [Sequelize.fn('DISTINCT', Sequelize.col('BANK')), 'BANK'],
    ],
  });
  const updatedBankNames = bankNames.reduce((acc, bank) => {
    acc.push(bank.BANK);
    return acc;
  }, []);
  return updatedBankNames;
};
const getBranches = async (bank) => {
  const branches = await models.BankDetails.findAll({
    attributes: ['BRANCH'],
    where: {
      BANK: bank,
    },
  });
  const updatedBranches = branches.reduce((acc, branch) => {
    acc.push(branch.BRANCH);
    return acc;
  }, []);
  return updatedBranches;
};
const getBankDetails = async (ifsc) => {
  const bank = await models.BankDetails.findAll({
    attributes: ['BANK', 'BRANCH', 'ADDRESS', 'CITY1', 'CITY2', 'STATE', 'STD_CODE', 'PHONE'],
    where: {
      IFSC: ifsc,
    },
  });
  return bank;
};
const getIfsc = async (bank, branch) => {
  const ifsc = await models.BankDetails.findAll({
    attributes: ['IFSC'],
    where: {
      BANK: bank,
      BRANCH: branch,
    },
  });
  return ifsc[0].IFSC;
};
module.exports = {
  insertBankDetails,
  getBankNames,
  getBranches,
  getBankDetails,
  getIfsc,
};
