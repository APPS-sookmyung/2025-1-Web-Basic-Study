import React from "react";

// 학생 목록. id까지 명시함. 나중에 key로 사용하기 위함
const students = [
  {
    id: 1,
    name: "Inje",
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
      {/* key는 리액트가 각 항목을 구분하기 위해 필요함. 성능 최적화 목적도 있음 */}
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>; // key로 id 사용함
      })}
    </ul>
  );
}

export default AttendanceBook;
