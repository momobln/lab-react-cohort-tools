import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function StudentDetailsPage() {
  const { studentId } = useParams(); // 👈 نحصل على رقم الطالب من URL
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch("/students.json") // 👈 نقرأ نفس ملف الطلاب
      .then((res) => res.json())
      .then((data) => {
        const foundStudent = data.find((s) => s._id === studentId);
        setStudent(foundStudent);
      });
  }, [studentId]);

  if (!student) {
    return <p>Loading student...</p>;
  }

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Cohort: {student.cohort}</p>

      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default StudentDetailsPage;
