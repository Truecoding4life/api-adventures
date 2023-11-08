const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// ... (other imports)

const routes = require('./controllers');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

