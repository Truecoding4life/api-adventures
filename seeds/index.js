
const sequelize = require('../config/connection');
const seedProject = require('./userData');
const seedResource = require('./resourceData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedProject();

  await seedResource();

  process.exit(0);
};

seedAll();