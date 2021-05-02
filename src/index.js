const enrichment = require("imi-enrichment-address");
const express = require("express");
const app = express();

const server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/", (req, res, next) => {
    res.json({status:'ok'});
});

app.get("/geocode", (req, res, next) => {
  console.log(req.query)
  enrichment(req.query.address).then((json) => {
    console.log(json)
    res.json(json);
  })
});
