const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody on OCP42!");
});

module.exports.app = app;
