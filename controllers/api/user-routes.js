const express = require('express');
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
req.session.user_id = dbUserData.user_id
res.status(200).json(dbUserData);
    });
  }
})

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
  res.render('login')
  
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
  res.render('dashboard')
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


