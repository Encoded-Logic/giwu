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

export default function Bible(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item lg={4} sm={5} xs={12} className="bible_sidebar sidebar">
        <div className="sidebar_header">
          <Link to="/">
            <Button>{props.bible}</Button>
          </Link>
        </div>
        <div className="sidebar_content">
          {props.appData ? (
            props.appData.booklist.map((book) => (
              <Link key={book.num} to={"/" + props.bible + "/" + book.num}>
                <Card>
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
              </Link>
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
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={10}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="center-me"
            >
              please select a Book
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
