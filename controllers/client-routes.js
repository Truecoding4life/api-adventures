const router = require("express").Router();
const { where } = require("sequelize");
const { Resource, User, Project, Post } = require('../models');
const { route } = require("./api");
// home route
router.get("/", async (req, res) => {
  try {
    if(req.session.loggedIn) {
       const dbPostData = await Post.findAll({
      include: [{ model: Comment, include: [{ model: User }]}]
    });
    res.json(posts);
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
    } else {
      res.status(200).render("login");
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
     const dbPostData = await Post.findByPk({
      where: {
        user_id: req.session.user_id
      },});
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
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
router.get('/project/:id', async (req, res) => {
  try {
    const dbProjectData = await Project.findByPk( 
      { where: { user_id: req.params.session.user_id }});
    const project = dbProjectData.get({ plain: true });
    res.render('project', { project, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



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



module.exports = router;