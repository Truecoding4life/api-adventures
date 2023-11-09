
const sequelize = require('../config/connection');
const seedProject = require('./projectData');
const seedResource = require('./resourceData');
const seedUser = require('./userData');
const seedCategory = require('./categoryData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedCategory();

  await seedResource();
  
  await seedProject();

 

  process.exit(0);
};

seedAll();