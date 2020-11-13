import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
  },
  bibleRoot: {
    flexGrow: 1,
  },
}));

export default function Books(props) {
  const classes = useStyles();
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [openedBook, setOpenedBook] = useState(null);

  const setChapter = (chapter) => {
    setSelectedChapter(chapter);
    props.addNewChapter(chapter);
  };
  const openChapter = (chapter) => {
    let data = {
      bible: props.bible,
      book: props.book,
      chapter: chapter.chapter,
    };
    let indexChapter = props.chapterList.findIndex(
      (x) =>
        x.bible === data.bible &&
        x.book === data.book &&
        x.chapter === data.chapter
    );

    if (indexChapter < 0) {
      axios
        .post("/getChapter", data)
        .then((res) => {
          if (res.data) {
            if (res.data.success) {
              setChapter(res.data.chapter);
            } else {
              props.popNowMessage(
                "error : 22 - " +
                  (res.data.message
                    ? res.data.message
                    : "Somthing went wrong, please try again later")
              );
              console.log(res);
            }
          } else {
            props.popNowMessage(
              "error : 23 - " +
                (res.data.message
                  ? res.data.message
                  : "Somthing went wrong, please try again later")
            );
            console.log(res);
          }
        })
        .catch(function (error) {
          props.popNowMessage(
            "error : 110 - Somthing went wrong, please try again later"
          );
        });
    } else {
      setChapter(props.chapterList[indexChapter]);
      console.log(indexChapter);
      console.log(props.chapterList[indexChapter]);
    }
  };

  useEffect(() => {
    if (props.booklist) {
      let bookNum = parseInt(props.book);
      let selectedbook = props.booklist.find((x) => x.num === bookNum);
      if (selectedbook) {
        setOpenedBook(selectedbook);
      } else {
        props.popNowMessage("Error : Please go back and try again ... Thanks");
      }
    } else {
      console.log("loading");
    }
  }, [props.booklist]);

  return (
    <Grid container className={classes.root}>
      <Grid item lg={4} sm={5} xs={12} className="bible_sidebar sidebar">
        <div className="sidebar_header">
          <Link to={"/" + props.bible}>
            <Button>
              {props.bible} - {openedBook ? openedBook.book : ""}
            </Button>
          </Link>
        </div>
        <div className="sidebar_content">
          {openedBook ? (
            openedBook.chapters.map((chapter) => (
              <Card
                key={uuid()}
                onClick={() => {
                  openChapter(chapter);
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Chapter {chapter.chapter}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          ) : (
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Loading
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )}
        </div>
      </Grid>
      <Grid item lg={8} sm={7} xs={12} className="bible_contants sidebar">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={10}>
            {selectedChapter ? (
              selectedChapter.verses.map((verse) => (
                <Card key={uuid()}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className="center-me"
                      >
                        {verse.c + ":" + verse.v + " - " + verse.t}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
            ) : (
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="center-me"
              >
                please select a chapter to read
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
