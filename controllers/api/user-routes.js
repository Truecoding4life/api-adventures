
const router = require('express').Router();
const { User } = require('../../models');

const router = express.Router();

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
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async(req,res) => {
  try{ 
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbUserData) {
      res
      .status(400)
      .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
      .status(400)
      .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    req.session.save(() =>{
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      console.log(
        '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      );

      res
      .status(200)
      .json({ user: dbUserData, message: 'You are now logged in!' });
    });   
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//   secret: 'secretly_key',
//   resave: false,
//   saveUninitialized: true
// }));

// // Routes:
// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   req.session.user = { username, password: hashedPassword };

//   res.redirect('/dashboard');
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;


//   const user = req.session.user;

//   if (user && await bcrypt.compare(password, user.password)) {
//     req.session.loggedIn = true;
//     res.redirect('/dashboard');
//   } else {
//     res.send('Invalid username or password');
//   }
//   res.render('login')

// });



// app.get('/logout', (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       return console.log(err);
//     }
//     res.redirect('/login');
//   });
// });

// app.get('/dashboard', (req, res) => {
//   if (req.session.loggedIn) {
//     res.send('Welcome to the dashboard!');
//   } else {
//     res.redirect('/login');
//   }
//   res.render('dashboard')
// });



// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


