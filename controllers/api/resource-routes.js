const router = require("express").Router();
const { Resource, Category, User, Project } = require("../../models");

// Route to create resource, tested and working
router.post("/", async (req, res) => {
  try {
    const newResource = await Resource.create({
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      user_id: req.session.user_id,
      category_id: req.body.category_id,
    });
    res.status(201).json("You created a new resource!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Route to resources by Category, needs testing
router.post('/search', async (req, res) => {
  const { categoryId } = req.query;

  try {
    const resources = await Resource.findAll({
      include: [
        {
          model: Category,
          where: categoryId ? { id: categoryId } : {},
          attributes: [], // exclude category fields from the result
        },
      ],
      attributes: ['id', 'title', 'description'], // specify the fields you want to retrieve
    });

    res.render('search-results', { resources });// update handlebars template file name
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get One Resource 

router.get("/resource/:id", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      const resourceData = await Resource.findByPk(req.params.id, {
        include: [{model: User,
          // include: [{model: Comment,}],
          },
        ],
      });
      if (resourceData) {
        const resource = resourceData.get({ plain: true });
        console.log(resource);
        res
          .status(200)
          .render("updateDelete", { resource: resource, loggedIn: req.session.loggedIn });
      } else {
        res.status(404).render("dashboard");
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// Route to make a comment for a single resource
// We might need this route later
router.post("/:id", async (req, res) => {
  try {
    const dbResourceData = await resource.findByPk({
      where: { id: req.params.resource_id },
    });

    const resource = dbResourceData.get({ plain: true });
    res.render("resource", { resource, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// resource update route, tested and working
router.put("/:id", (req, res) => {
  Resource.update(
    {
      title: req.params.title,
      description: req.params.description,
      image_url: req.params.image_url,
      user_id: req.session.user_id,
      category_id: req.params.category_id,
    },
    {
      where: {
        id: req.params.resource_id,
      },
    }
  )
    .then((updatedResource) => {
      res.json(updatedResource);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// resource delete route, tested and working
router.delete("/:id", async (req, res) => {
  try {
    const deletedRows = await Resource.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedRows === 0) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }
    res.json({ message: "Resource deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
