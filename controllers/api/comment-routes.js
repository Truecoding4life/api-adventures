const router = require('express').Router();
const { Post, Comment } = require('../../models');

// The `/api/comments` endpoint

router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/comments', async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: 'Unable to create comment' });
  }
});

router.put('/comments/:id', async (req, res) => {
  try {
    const [updatedRows] = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedRows === 0) {
      res.status(404).json({ message: 'Comment not found' });
      return;
    }
    res.json({ message: 'Comment updated successfully' });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/comments/:id', async (req, res) => {
  try {
    const deletedRows = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedRows === 0) {
      res.status(404).json({ message: 'Comment not found' });
      return;
    }
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
