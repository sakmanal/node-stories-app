const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')



// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {       //renders the view login with the loginLayout 
        layout: 'loginLayout',
      })    
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard', {  //renders the view dashboard with the default main Layout
        name: req.user.firstName
    })  
})

module.exports = router