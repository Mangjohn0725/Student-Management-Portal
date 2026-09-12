import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">

      <div className="student-avatar">
        {student.name.charAt(0)}
      </div>

      <div className="student-info">
        <h3>{student.name}</h3>

        <p className="username">
          @{student.username}
        </p>

        <p>
          📧 {student.email}
        </p>

        <p>
          🏢 {student.company.name}
        </p>
      </div>

      <div className="student-actions">

        <Link
          to={`/students/${student.id}`}
          className="view-btn"
        >
          View
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(student.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default StudentCard;