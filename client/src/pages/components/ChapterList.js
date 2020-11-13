import React, { useState } from "react";
import {
  makeStyles,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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

export default function ChapterList(props) {
  const classes = useStyles();
  const openChapter = (data) => {
    props.openChapter(data);
  };
  return (
    <React.Fragment>
      <div className="sidebar_header">
        <Link to="/">
          <Button>{props.bible}</Button>
        </Link>
      </div>
      <div className="sidebar_content">
        {props.selectedBook ? (
          props.selectedBook.chapters.map((chapter) => (
            <Card
              key={chapter.chapter}
              onClick={() => {
                openChapter(chapter);
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chapter {chapter.chapter}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {chapter.about}
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
    </React.Fragment>
  );
}
