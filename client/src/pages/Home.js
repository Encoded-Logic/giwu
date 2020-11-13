import React from "react";
import {
  makeStyles,
  Typography,
  Container,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
  },
  bibleRoot: {
    flexGrow: 1,
  },
  topLeftIcons: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  topLeftIcon: {
    width: "5px",
    height: "5px",
  },
  Toproot: {
    flexGrow: 1,
  },
  TopmenuButton: {
    marginRight: theme.spacing(2),
  },
  Toptitle: {
    flexGrow: 1,
  },
  bibleList: {
    padding: "50px",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.Toproot}>
      <Container maxWidth="lg" className={classes.bibleList}>
        <Grid container spacing={3}>
          {props.appData ? (
            props.appData.biblelist.map((bible) => (
              <Grid key={bible.link} item xs={6}>
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <Link to={"/" + bible.link}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {bible.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {bible.about}
                        </Typography>
                      </Link>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
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
        </Grid>
      </Container>
    </div>
  );
}
