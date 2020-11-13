import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Snackbar, IconButton } from "@material-ui/core";
import axios from "axios";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Bible from "./pages/Bible";

import CloseIcon from "@material-ui/icons/Close";

export default function App() {
  const [appData, setAppData] = useState(null);
  const [messageOpen, setMessageOpen] = React.useState(false);
  const [messageText, setMessageText] = React.useState("");
  const [chapterList, setChapterList] = React.useState([]);

  const popNowMessage = (message = "") => {
    // console.log(message);
    setMessageText(message);
    handleMessageOpen();
    setTimeout(() => {
      handleMessageClose();
    }, 7000);
  };

  useEffect(
    () => {
      if (appData === null) {
        axios
          .get("/initdata")
          .then((res) => {
            if (res.data) {
              if (res.data.success) {
                // console.log(res.data);
                setAppData(res.data ? res.data : null);
                popNowMessage(
                  res.data.message
                    ? res.data.message
                    : "Welcome to our webapp, hope you enjoy"
                );
              } else {
                popNowMessage(
                  "error : 22 - " +
                    (res.data.message
                      ? res.data.message
                      : "Somthing went wrong, please try again later")
                );
                console.log(res);
              }
            } else {
              popNowMessage(
                "error : 23 - " +
                  (res.data.message
                    ? res.data.message
                    : "Somthing went wrong, please try again later")
              );
              console.log(res);
            }
          })
          .catch(function (error) {
            popNowMessage(
              "error : 11 - Somthing went wrong, please try again later"
            );
            // console.log(error);
          });
        // console.log("hi from app");
      }
    },
    [appData, popNowMessage],
    [popNowMessage]
  );

  const handleMessageOpen = () => {
    setMessageOpen(true);
  };

  const handleMessageClose = () => {
    setMessageOpen(false);
  };

  const addNewChapter = (verse) => {
    // console.log(verse);
    let newChapterList = chapterList;
    newChapterList.push(verse);
    setChapterList(newChapterList);
  };

  return (
    <Router>
      <Snackbar
        open={messageOpen}
        autoHideDuration={6000}
        onClose={handleMessageClose}
        message={messageText}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleMessageClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <Switch>
        <Route
          path="/:bible/:book"
          render={({ match }) => {
            return (
              <Books
                bible={match.params.bible}
                book={match.params.book}
                booklist={appData ? appData.booklist : []}
                popNowMessage={popNowMessage}
                addNewChapter={addNewChapter}
                chapterList={chapterList}
              />
            );
          }}
        />
        <Route
          path="/:bible"
          render={({ match }) => {
            return (
              <Bible
                bible={match.params.bible}
                appData={appData}
                popNowMessage={popNowMessage}
              />
            );
          }}
        />
        <Route path="/">
          <Home popNowMessage={popNowMessage} appData={appData} />
        </Route>
      </Switch>
    </Router>
  );
}
