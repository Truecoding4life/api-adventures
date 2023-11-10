const router = require('express').Router();
const { Resource, Category, User, Project} = require('../../models');

router.post('/resource', async (req, res) => {
    try {
      const newResource = await Resource.create({ 
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        user_id: req.session.user_id,
        category_id: req.body.category_id
        });
      res.status(201).json( "You created a new resource!");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  // Route to make a comment for a single resource
  // We might need this route later
  router.post('/resource/:id', async (req, res) => {
    try {
      const dbResourceData = await resource.findByPk(
        { where: { id: req.params.resource_id }});
  
      const resource = dbResourceData.get({ plain: true });
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