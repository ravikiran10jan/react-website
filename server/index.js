const app = require("./app");

app.listen(app.get("port"), function() {
  console.log("listening on ", app.get("port"));
});