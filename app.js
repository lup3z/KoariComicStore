const express = require("express");
const session = require('express-session')
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');
const path = require("path");
const methodOverride = require('method-override');
const app = express();
const cors = require("cors")
const puerto = process.env.PORT || 3030

app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");
const domainsFromEnv = process.env.CORS_DOMAINS || ""

const whitelist = domainsFromEnv.split(",").map(item => item.trim())

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))
app.use(cors());

app.use(session({
  secret: "Shhh, It's a secret",
  resave: false,
  saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));
app.use("/", require("./src/routes/index.routes"));


app.use("/api", cors(), require("./src/routes/index.routes"));

app.use((req, res, next) => {
  res.status(404).render('not-found')
});

app.listen(puerto, () => {
  console.log(`Server is running on PORT : ${puerto}`);
});


module.exports = app;