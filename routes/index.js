const express =require('express')

const router =express.Router();
const homeController = require('../controllers/home_controller');
const  user = require('../controllers/user_controller');
const post = require('../controllers/posts_controller');
router.get('/',homeController.home) 
router.use('/users',user.profile) 
router.use('/posts',post.posts)
console.log('Router is been used') 

module.exports =router;

