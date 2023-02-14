const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();
//const userAuth = require("./middlewares/userAuth");
const session = require('express-session');
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'souvik',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(cookieParser())
app.use(express.urlencoded({
    extended: true
}));


app.set("view engine", "ejs");
app.set("views", "views");

dbDriver = "mongodb+srv://nodeClassjan:BrnrXRpwEfvb35kG@cluster0.4axmojt.mongodb.net/aoth";



//app.use(userAuth.authJwt);

const userRoute=require('./route/UserRoute');
app.use(userRoute)


port = process.env.PORT || 1000;

mongoose.connect(dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => {
    app.listen(port, () => {
        console.log("DB Connected...");
        console.log(`App Running On http://localhost:${port}`);
    })
}).catch(err => {
    console.log(err);
})