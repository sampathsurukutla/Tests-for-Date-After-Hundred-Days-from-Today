const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const resultDate = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${resultDate.getDate()}/${
      resultDate.getMonth() + 1
    }/${resultDate.getFullYear()}`
  );
});

module.exports = app;
