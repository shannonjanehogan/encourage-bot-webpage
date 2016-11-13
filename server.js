const express     = require("express");
const app         = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("encouragesplash");
});

app.use(express.static(__dirname + '/styles'));

app.listen(3000, () => {
  console.log("Example app listening on port ");
});
