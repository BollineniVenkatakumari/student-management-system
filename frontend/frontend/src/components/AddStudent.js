import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style.css';

function AddStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    id: '', 
    name: '', 
    roll_no: '', 
    email: '', 
    phone_no: '', 
    course: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://127.0.0.1:8000/api/students/', student);
    navigate('/');
  };

  return (
    <div className="form-wrapper">
     <div className="container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div><label>ID:</label><input type="text" name="id" value={student.id} onChange={handleChange} required /></div>
        <div><label>Name:</label><input type="text" name="name" value={student.name} onChange={handleChange} required /></div>
        <div><label>Roll No:</label><input type="text" name="roll_no" value={student.roll_no} onChange={handleChange} required /></div>
        <div><label>Email:</label><input type="email" name="email" value={student.email} onChange={handleChange} required /></div>
        <div><label>Phone No:</label><input type="text" name="phone_no" value={student.phone_no} onChange={handleChange} required /></div>
        <div><label>Course:</label><input type="text" name="course" value={student.course} onChange={handleChange} required /></div>
        <button type="submit">Add</button>
      </form>
     </div>
    </div>
  );
}

export default AddStudent;
