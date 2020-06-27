const path = require('path')
const express = require("express");
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

// Load config
dotenv.config({ path: "./config/config.env" });

// Passport config
require('./config/passport')(passport)

connectDB();

const app = express();

// Logging (when theres a requst(http method, request etc.) on the page it is shown on the console)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Handlebars
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//Experss Sessions middleware (must be above passport.session())
app.use(
  session({
    secret: 'keyboard cat',  //whatever we like
    resave: false,    //don't save a session if nothing is modified
    saveUninitialized: false, //don't create a seesion until something is stored
    //store session to database (when a user refresh the page, he is still logged in)
    store: new MongoStore({ mongooseConnection: mongoose.connection }) 
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
