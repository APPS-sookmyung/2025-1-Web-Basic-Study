import React from "react";
import Book from "./book";

function library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" num0fPage={300} />
      <Book name="처음 만난 AWS" num0fPage={400} />
      <Book name="처음 만난 리액트" num0fPage={500} />
    </div>
  );
}

export default library;
