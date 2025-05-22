import React from 'react';

const students = [
  {
    id: 1,
    name: '영교',
  },
  {
    id: 2,
    name: '마크',
  },
  {
    id: 3,
    name: '토토로',
  },
  {
    id: 4,
    name: '슈가슈가룬',
  },
];
function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={`student-id-${student.id}`}> {student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
