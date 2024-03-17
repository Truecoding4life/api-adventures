const { User } = require('../models');
const bcrypt = require("bcrypt");


let userData = [
{
    username: "andy",
    email: "andy@google.com",  
    password: "password"
},
{
    username: "Armand",
    email: "armand@google.com",
    password: "password"
},
{
  username: "Anna Rose",
  email: "annarose@google.com",
  password: "password"
},
{
  username: "Thai",
  email: "thai@google.com",
  password: "password"
},
{
  username: "farley",
  email: "farley@google.com",
  password: "password"
},
{
  username: "Bacon",
  email: "bacon@google.com",
  password: "password"
},
];
const seedUser = async () => {
  const hashedUserData = await Promise.all(userData.map(async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return {
      ...data,
      password: hashedPassword
    };
  }));
  return User.bulkCreate(hashedUserData);
};

module.exports = seedUser;
