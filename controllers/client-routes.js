const router = require("express").Router();
const { Resource, User, Project ,Category} = require('../models');

// home route
router.get("/", async (req, res) => {
  try {
    if(req.session.loggedIn) {
       const dbCategoryData = await Category.findAll({
    });
    const categories = dbCategoryData.map((category) => category.get({ plain: true }));
    res.render("categorypage", {
      categories,
      loggedIn: req.session.loggedIn,
    });
    } else {
      res.status(200).render("homepage");
    }
    } 
    catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Dashboard route
router.get("/dashboard", async (req, res) => {
  try {
    if(req.session.loggedIn){
     const dbcategoryData = await Resource.findAll({
      where: {
        user_id: req.session.user_id
      },});
    const resources = dbcategoryData.map((category) => category.get({ plain: true }));
    res.render("dashboard", {
      resources,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    }); 
    }
    else {
      res.status(200).render("login");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Project route

//find one project by id: 
router.get('/project/:id', async (req, res) => {
  try {
    const dbprojectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: Project,
          attributes: ['title', 'user_id'],
          include: [{ model: Project, include: [{ model: User }]}]
        },
      ],
    });

    // const project = dbprojectData.get({ plain: true });
    // res.render('project', { project, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Project route
router.get('/project', async(req,res)=>{
  try{
    res.render('project', { Project, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// login route
router.get("/login", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.status(200).redirect("/");
      return;
    }
    // Otherwise, render the 'login' template
    res.status(200).render("login");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
router.get('/logout' , async (req,res)=>{
  try{
    if(req.session.loggedIn){
      req.session.destroy(()=>{
        res.status(204).redirect('login');
      })
    }
    else {
      res.status(404).end();
    }
  } catch(err){
    res.status(500).json(err);
  }
})



module.exports = router;