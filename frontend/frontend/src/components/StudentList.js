import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style.css';

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
    <div className="container">
      <h2>Student List</h2>
      <Link to="/add" className="add-link">Add Student</Link>
      {students.map((student) => (       
        <div key={student.id} className='student-card'>
           <p><strong>ID:</strong> {student.id}</p>
           <p><strong>Name:</strong> {student.name}</p>
           <p><strong>Roll No:</strong> {student.roll_no}</p>
           <p><strong>Email:</strong> {student.email}</p>
           <p><strong>Phone:</strong> {student.phone_no}</p>
           <p><strong>Course:</strong> {student.course}</p>
           <div className="action-buttons">
            <Link to={`/edit/${student.id}`} className="edit-link">Edit</Link>
            <button className="delete-btn" onClick={() => deleteStudent(student.id)}>Delete</button>
           </div>       
        </div>       
      ))}
    </div>
  );
}

export default StudentList;
