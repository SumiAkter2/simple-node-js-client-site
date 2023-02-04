import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then(res => res.json())
    .then(data=>setStudents(data))
  }, [])
  return (
    <div className="App">
      <h1>Simple node js for client site</h1>
      {
        students.length
}
      <form>
        <input type="text" placeholder="Name" name="name" /><br />
        <input type="text" placeholder="Fav Subject" name="favSub" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
