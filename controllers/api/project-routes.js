const router = require("express").Router();
const { Resource, Category, User, Project } = require("../../models");

// project create route, tested and working
router.post("/", async (req, res) => {
  try {
    const newProject = await Project.create({
      title: req.body.title,
      description: req.body.description,
      deployed_url: req.body.deployed_url,
      repo_url: req.body.repo_url,
      user_id: req.session.user_id,
    });
    res.status(201).json("You created a new project!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// project update route, tested and working
router.put("/:id", async (req, res) => {
  try {
    const [updatedRows] = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedRows === 0) {
      res.status(404).json({ message: "Project not found" });
      return;
    }
    res.json({ message: "Project updated successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
});

// project delete route, tested and working
router.delete("/:id", async (req, res) => {
  try {
    const deletedRows = await Project.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedRows === 0) {
      res.status(404).json({ message: "Project not found" });
      return;
    }
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
