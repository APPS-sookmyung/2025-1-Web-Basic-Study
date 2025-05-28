import React from "react";

const students = [
  {
    id: 1,
    name: "yeseon",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
/*
students 배열을 map() 함수로 순회.
각 학생의 이름을 목록 형태로 출력. 
각 학생 항목은 고유한 id를 key로 사용 ->React가 효율적으로 DOM을 업데이트

=> React에서는 List와 Key를 활용하여 반복되는 여러 컴포넌트를 효율적으로 렌더링한다.
*/
