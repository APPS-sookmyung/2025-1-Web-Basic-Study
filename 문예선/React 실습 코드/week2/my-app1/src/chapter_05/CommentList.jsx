import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "문예선",
    comment: "안녕하세요! 문예선입니다.",
  },
  {
    name: "강호동",
    comment: "Hello World!",
  },
  {
    name: "이수근",
    comment: "비가 내리고 있습니다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
