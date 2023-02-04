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
    const Name = e.target.name.value;
    const favSub = e.target.favSub.value;
    console.log(Name, favSub);
    e.target.reset();
    
  };
  return (
    <div className="App">
      <h1>Simple node js for client site</h1>
      <h2>{students.length}</h2>
      {students.map((student) => (
        <ul key={student.id} style={{ listStyleType: "square" }}>
          <li key={student.id}>
            {student.id} .{student.name}----
            {student.favSub}
          </li>
        </ul>
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
