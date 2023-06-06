import asyncHandler from '../middleware/asyncHandler.js';
import Post from '../models/postModel.js';

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  if (posts) {
    res.json(posts);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

// @desc    Get single post
// @route   GET /api/posts/:id
// @access  Public
export const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});
