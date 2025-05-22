import React from 'react';
import Comment from './comment.jsx';

const comments = [
  {
    name: '김영교',
    comment: '안녕하세여 김영교입니다.',
  },

  {
    name: '유병재',
    comment: '웃으면 안되는 생일파티에 초대합니다',
  },
  {
    name: '찰스엔터',
    comment: '이번달 월간데이트가 업데이트 됐습니다',
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
