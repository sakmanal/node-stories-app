module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    },

    // if user is logged in (Authenticated) and mavigates to '/', 
    // redirect him to dashboard and not to login page
    ensureGuest: function (req, res, next) {
      if (req.isAuthenticated()) {
        res.redirect('/dashboard')
      } else {
        return next()
      }
    },
  }
  