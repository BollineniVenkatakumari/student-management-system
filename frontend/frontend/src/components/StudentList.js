import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/students/');
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8000/api/students/${id}/`);
    loadStudents();
  };

  return (
    <div>
      <h2>Student List</h2>
      <Link to="/add">Add Student</Link>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>ID:</strong> {student.id} | <strong>Name:</strong> {student.name} | <strong>Roll No:</strong> {student.roll_no} | <strong>Email:</strong> {student.email} | <strong>Phone:</strong> {student.phone_no} | <strong>Course:</strong> {student.course} 
            &nbsp; <Link to={`/edit/${student.id}`}>Edit</Link>
            &nbsp; <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
