module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BankDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      BANK: {
        type: Sequelize.STRING,
      },
      IFSC: {
        type: Sequelize.STRING,
      },
      BRANCH: {
        type: Sequelize.STRING,
      },
      ADDRESS: {
        type: Sequelize.STRING,
      },
      CITY1: {
        type: Sequelize.STRING,
      },
      CITY2: {
        type: Sequelize.STRING,
      },
      STATE: {
        type: Sequelize.STRING,
      },
      STD_CODE: {
        type: Sequelize.FLOAT,
      },
      PHONE: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('BankDetails');
  },
};
