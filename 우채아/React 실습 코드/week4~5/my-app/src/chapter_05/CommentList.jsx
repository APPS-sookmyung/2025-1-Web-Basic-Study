import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "우채아",
        comment: "제가 만든 첫 컴포넌트입니다."
    },
    {
        name: "유재석",
        comment: "리액트 재밌어요~!"
    },
    {
        name: "강민경",
        comment: "저도 리액트 배우고 싶어요."
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
      );
}

export default CommentList;