import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    id: '', 
    name: '', 
    roll_no: '', 
    email: '', 
    phone_no: '', 
    course: '',
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/students/${id}/`).then(res => setStudent(res.data));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/students/${id}/`, student);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div><label>ID:</label><input type="text" name="id" value={student.id} disabled /></div>
        <div><label>Name:</label><input type="text" name="name" value={student.name} onChange={handleChange} required /></div>
        <div><label>Roll No:</label><input type="text" name="roll_no" value={student.roll_no} onChange={handleChange} required /></div>
        <div><label>Email:</label><input type="email" name="email" value={student.email} onChange={handleChange} required /></div>
        <div><label>Phone No:</label><input type="text" name="phone_no" value={student.phone_no} onChange={handleChange} required /></div>
        <div><label>Course:</label><input type="text" name="course" value={student.course} onChange={handleChange} required /></div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditStudent;
