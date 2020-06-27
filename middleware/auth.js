module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    },

    //if logged in (Authenticated) and mavigate to '/', navigate to dashboard and not to login page
    ensureGuest: function (req, res, next) {
      if (req.isAuthenticated()) {
        res.redirect('/dashboard')
      } else {
        return next()
      }
    },
  }
  