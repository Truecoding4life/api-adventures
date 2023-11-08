const { User } = require('../models');

const userData = [
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

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
