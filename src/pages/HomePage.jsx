import { Link } from "react-router-dom";

function HomePage({ students }) {
  return (
    <div>
      <h1>Cohort Students</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <Link to={`/students/${student._id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
