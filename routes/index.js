const express = require('express')
const router = express.Router()



// @desc    Login/Landing page
// @route   GET /
router.get('/', (req, res) => {
    res.render('login', {       //renders the view login with the loginLayout 
        layout: 'loginLayout',
      })    
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')  ////renders the view dashboard with the default main Layout
})

module.exports = router