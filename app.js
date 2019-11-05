(express = require("express")),
  (path = require("path")),
  (bodyParser = require("body-parser"));

var port = process.env.port || 3001;
var app = express();

var routes = require("./routes/search");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "\\static\\index.html");
});

app.listen(port, function() {
  console.log("Application is listening on port:" + port);
});
