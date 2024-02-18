const express =require('express')
const Post = require('../controllers/posts_controller')

const router =express.Router()

router.get('/posts',Post.posts)