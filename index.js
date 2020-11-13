const express = require("express");
const path = require("path");
const fs = require("fs");

const db = require("./data/dbcon");

const app = express();

app.use(express.json());
app.use(express.static("client/build"));

let biblelist = fs.readFileSync("data/biblelist.json");
let booklist = fs.readFileSync("data/booklist.json");

app.post("/getChapter", (req, res) => {
  let sql =
    "SELECT * FROM `t_" +
    req.body.bible +
    "` WHERE `b`=" +
    req.body.book +
    " AND `c`=" +
    req.body.chapter +
    " ";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ success: false });
    } else if (result[0]) {
      res.json({
        success: true,
        chapter: {
          bible: req.body.bible,
          book: req.body.book,
          chapter: req.body.chapter,
          verses: result,
        },
      });
    } else {
      res.send({ success: false });
    }
  });
});

app.get("/initdata", (req, res) => {
  res.send({
    success: true,
    biblelist: JSON.parse(biblelist),
    booklist: JSON.parse(booklist),
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen("5000", () => {
  console.log("searver started on port 5000");
});
