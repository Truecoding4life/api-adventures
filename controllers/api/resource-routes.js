const router = require('express').Router();
const { Resource, Category, User, Project} = require('../../models');

router.get('/', async (req, res) => {
    try {
      const dbResourceData = await Resource.findAll({
        // include: [
        //   {
        //     model: project,
        //     attributes: ['content', 'author'],
        //   },
        // ],
      });
  
      const resources = dbResourceData.map((resource) => resource.get({ plain: true }));
      res.render('homepage', {
        resources,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



  router.get('/resource/:id', async (req, res) => {
    try {
      const dbresourceData = await resource.findByPk(req.params.id, {
        include: [
          {
            model: Project,
            attributes: ['title', 'user_id'],
            include: [{ model: Project, include: [{ model: User }]}]
          },
        ],
      });
  
      const resource = dbresourceData.get({ plain: true });
      res.render('resource', { resource, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });






    // module.exports = router;








    // router.post('/homepage', async (req, res) => {
    //     try {
    //       const newResource = await Resource.create({...req.body, user_id: req.session.user_id});
    //       res.status(201).json(newResource);
    //     } catch (err) {
    //       console.log(err)
    //       res.status(400).json({ message: 'Unable to create resource' });
    //     }
    //   });
      
      router.post('/resource', (req, res) => {
        const newResource = new Resource({
            title: req.body.title,
            description: req.body.description, image_url: req.body.image_url, user_id: req.session.user_id, category_id: req.body.category_id
        });
        
      
        newResource.save((err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error creating Resource');
            } else {
                res.redirect('/dashboard');
            }
        });
      });
      
      router.put('/:id', async (req, res) => {
        try {
          const [updatedRows] = await Resource.update(req.body, {
            where: {
              id: req.params.id,
            },
          });
          if (updatedRows === 0) {
            res.status(404).json({ message: 'Resource not found' });
            return;
          }
          res.json({ message: 'Resource updated successfully' });
        } catch (error) {
          res.status(400).json(error);
        }
      });
      
      router.delete('/:id', async (req, res) => {
        try {
          const deletedRows = await Resource.destroy({
            where: {
              id: req.params.id,
            },
          });
          if (deletedRows === 0) {
            res.status(404).json({ message: 'Resource not found' });
            return;
          }
          res.json({ message: 'Resource deleted successfully' });
        } catch (error) {
          res.status(500).json(error);
        }
      });
      
      module.exports = router;