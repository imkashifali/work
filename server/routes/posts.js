import express from 'express';

const router = express.Router();

//http://localhost:5000/posts

import { getPost, createPost, updatePost, deletePost } from '../controllers/posts.js'

router.get('/', getPost);

router.post('/', createPost);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);



export default router