const router = require('express').Router();
const { Resource, Category, User, Project } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const dbProjectData = await Project.findAll({
        // include: [
        //   {
        //     model: project,
        //     attributes: ['content', 'author'],
        //   },
        // ],
      });
  
      const projects = dbProjectData.map((project) => project.get({ plain: true }));
      res.render('homepage', {
        projects,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



  router.get('/project/:id', async (req, res) => {
    try {
      const dbprojectData = await project.findByPk(req.params.id, {
        include: [
          {
            model: Project,
            attributes: ['title', 'user_id'],
            include: [{ model: Project, include: [{ model: User }]}]
          },
        ],
      });
  
      const project = dbprojectData.get({ plain: true });
      res.render('project', { project, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });






    // module.exports = router;








    // router.post('/homepage', async (req, res) => {
    //     try {
    //       const newproject = await project.create({...req.body, user_id: req.session.user_id});
    //       res.status(201).json(newproject);
    //     } catch (err) {
    //       console.log(err)
    //       res.status(400).json({ message: 'Unable to create project' });
    //     }
    //   });
      
      router.post('/project', (req, res) => {
        const newProject = new Project({
            title: req.body.title,
            description: req.body.description, image_url: req.body.image_url, user_id: req.session.user_id, category_id: req.body.category_id
        });
        
      
        newProject.save((err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error creating Project');
            } else {
                res.redirect('/dashboard');
            }
        });
      });
      
      router.put('/:id', async (req, res) => {
        try {
          const [updatedRows] = await Project.update(req.body, {
            where: {
              id: req.params.id,
            },
          });
          if (updatedRows === 0) {
            res.status(404).json({ message: 'Project not found' });
            return;
          }
          res.json({ message: 'Project updated successfully' });
        } catch (error) {
          res.status(400).json(error);
        }
      });
      
      router.delete('/:id', async (req, res) => {
        try {
          const deletedRows = await Project.destroy({
            where: {
              id: req.params.id,
            },
          });
          if (deletedRows === 0) {
            res.status(404).json({ message: 'Project not found' });
            return;
          }
          res.json({ message: 'Project deleted successfully' });
        } catch (error) {
          res.status(500).json(error);
        }
      });
      
      module.exports = router;