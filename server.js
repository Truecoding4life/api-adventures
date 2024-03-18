require("dotenv").config(); //verify if this is needed
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({ });

const sess = {
  secret: 'Super secret secret',
 
  cookie: {
   
    maxAge: 3600000, //1hr
  },
  resave: false,
 
  saveUninitialized: true,
 
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// Static directory and parson JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use Handlebars.js for template engine
app.engine("handlebars", hbs.engine);
app.set('view engine', 'handlebars');


app.use(session(sess));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => 
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} Go to browser!`
    )
  );
  });
  