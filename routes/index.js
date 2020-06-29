const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const Story = require('../models/Story')


// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {       //renders the view login with the loginLayout 
        layout: 'loginLayout',
      })    
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
    try {
      // Enabling the lean option tells Mongoose to skip instantiating a full 
      // Mongoose document and just give you a plain old JavaScript object
      // https://mongoosejs.com/docs/tutorials/lean.html  
      const stories = await Story.find({ user: req.user.id }).lean()
      res.render('dashboard', {        // if we not choose a layout, we get the default main layout
        name: req.user.firstName,
        stories,    // stories: stories
      })
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
})

module.exports = router