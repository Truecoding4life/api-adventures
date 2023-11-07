const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secretly_key', 
  resave: false,
  saveUninitialized: true
}));

// Routes:
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  req.session.user = { username, password: hashedPassword };
  
  res.redirect('/dashboard');
  res.render('pages/signup')
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  
  const user = req.session.user;

  if (user && await bcrypt.compare(password, user.password)) {
    req.session.loggedIn = true; 
    res.redirect('/dashboard'); 
  } else {
    res.send('Invalid username or password');
  }
  res.render('pages/login')
});



app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    res.redirect('/login'); 
  });
});

app.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    res.send('Welcome to the dashboard!');
  } else {
    res.redirect('/login');
  }
 
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


