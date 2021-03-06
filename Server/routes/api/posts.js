const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post(
  '/', auth, async (req, res) => {

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new Post({
        description: req.body.description,
        title: req.body.title,
        url: req.body.url,
        picture: req.body.picture,
        category: req.body.category,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/posts
// @desc    Get all posts
// @access  Private
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });

    const updatedPosts = [];

    for (var i in posts) {
      var post = posts[i];
      const userInfo = await getUserInfo(post.user);

      var newPost = {
        _id: post._id,
        user: post.user,
        title: post.title,
        description: post.description,
        url: post.url,
        category: [...post.category],
        picture: post.picture,
        likes: [...post.likes],
        comments: [...post.comments],
        date: post.date,
        name: userInfo.name,
        alias: userInfo.alias,
        userPicture: userInfo.picture,
      };

      updatedPosts.push(newPost);
    }
    res.json(updatedPosts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts/:userId
// @desc    Get all posts
// @access  Private
router.get('/:userId', async (req, res) => {
  try {
    var userId = req.params.userId;
    const posts = await Post.find({ user: userId });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts/:userId/:category
// @desc    Get all posts
// @access  Private
router.get('/:userId/:category', auth, async (req, res) => {
  try {
    var userId = req.params.userId;
    var category = req.params.category;
    const posts = await Post.find({ user: userId });
    var categoryPosts = [];
    posts.forEach(function(post) {
      if (post.category == category) {
        categoryPosts.push(post);
      }
    });
    res.json(categoryPosts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts/:category
// @desc    Get all posts
// @access  Private
router.get('/:category', auth, async (req, res) => {
  try {
    var category = req.params.category;
    const posts = await Post.find({});
    var categoryPosts = [];
    posts.forEach(function(post) {
      if (post.category == category) {
        categoryPosts.push(post);
      }
    });
    res.json(categoryPosts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts/single/:id
// @desc    Get post by ID
// @access  Private
router.get('/single/getpost/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'post not found' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await post.remove();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/posts/like/:id
// @desc    Like a post
// @access  Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (post.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/posts/unlike/:id
// @desc    Like a post
// @access  Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has not yet been liked
    if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    // Get remove index
    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/posts/comment/:id
// @desc    Comment on a post
// @access  Private
router.post(
  '/comment/:id',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        alias: user.alias,
        picture: user.picture,
        user: req.user.id,
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Delete comment
// @access  Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Pull out comment from post
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Get remove index
    const removeIndex = post.comments.find((comment) => comment.id === req.params.comment_id).__index;

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

async function getUserInfo(userId) {
  const user = await User.findById(userId);
  var userInfo = {
    name: user.firstName + " " + user.lastName,
    alias: user.alias,
    picture: user.picture,
  }
  return userInfo;
}

module.exports = router;
