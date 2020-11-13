import React from "react";
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

export default function BookList(props) {
  const classes = useStyles();
  // console.log(props);
  // console.log(props.appData);
  const openChapter = (data) => {
    props.openBook(data);
  };
  return (
    <React.Fragment>
      <div className="sidebar_header">
        <Link to="/">
          <Button>
            {props.bible} - {props.chapter}
          </Button>
        </Link>
      </div>
      <div className="sidebar_content">
        {props.appData ? (
          props.appData.booklist.map((book) => (
            <Card
              key={book.num}
              onClick={() => {
                openChapter(book);
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.book}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {book.about}
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
