const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "bhai kaam kar rah hai",
  });
});
app.listen(4000, () => {
  console.log("the server is running ");
});
