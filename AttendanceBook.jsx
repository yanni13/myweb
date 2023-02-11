import React from "react";

const students = [
    {
        id:1,
        name: "Inje",
    },
    {
        id:2,
        name: "Steve",
    },
    {
        id:3,
        name: "Bill",
    },
    {
        id:4,//고유한 키 값을 모두 주어 경고창을 없애게 함
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {//map함수를 이용하여 리스트를 렌더링
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;