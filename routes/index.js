var express = require("express");
var router = express.Router();

const nameList = [
  { id: 1, name: "John" },
  { id: 2, name: "James" },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722",
    subheading: "Subheading",
    names: nameList,
  });
});

module.exports = router;
