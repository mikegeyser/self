const fs = require("fs");
const path = require("path");

module.exports = fs.readFileSync(
  path.resolve("src", "images", "profile-picture.svg"),
  "utf8"
);
