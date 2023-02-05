import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const favSub = e.target.favSub.value;
    const student = { name, favSub };
    console.log(student);
    e.target.reset();
    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newStudent = [...students, data];
        setStudents(newStudent);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Simple node js for client site</h1>
      <h2>{students.length}</h2>
      {students.map((student, index) => (
        <li key={student._id}>
          {index + 1}... .{student.name ? student.name : "Undefined"}----
          {student._id.slice(-2)}----
          {student.favSub}
        </li>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" />
        <br />
        <input type="text" placeholder="Fav Subject" name="favSub" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
