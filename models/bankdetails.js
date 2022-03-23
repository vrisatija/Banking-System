const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BankDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  BankDetails.init({
    BANK: DataTypes.STRING,
    IFSC: DataTypes.STRING,
    BRANCH: DataTypes.STRING,
    ADDRESS: DataTypes.STRING,
    CITY1: DataTypes.STRING,
    CITY2: DataTypes.STRING,
    STATE: DataTypes.STRING,
    STD_CODE: DataTypes.FLOAT,
    PHONE: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BankDetails',
  });
  return BankDetails;
};
