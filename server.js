const express     = require("express");
const app         = express();

app.set("view engine", "ejs");

app.set('port', (process.env.PORT || 3000));

//For avoiding Heroku $PORT error
app.get('/', function(req, res) {
    res.render("encouragesplash");
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

app.use(express.static(__dirname + '/styles'));
