import { useEffect, useState } from "react";
import axios from "axios";

import StudentCard from "../components/StudentCard";

function Students() {

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  // Fetch students using Axios
  useEffect(() => {

    const fetchStudents = async () => {

      try {

        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setStudents(response.data);

      } catch (err) {

        setError("Unable to load students.");

      } finally {

        setLoading(false);

      }

    };

    fetchStudents();

  }, []);

  // Search event
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Form input event
  const handleChange = (event) => {

    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });

  };

  // Add student form
  const handleSubmit = (event) => {

    event.preventDefault();

    if (!form.name || !form.email) {
      alert("Please enter the student name and email.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: form.name,
      username: form.name.toLowerCase().replaceAll(" ", ""),
      email: form.email,
      company: {
        name: "New Student"
      }
    };

    setStudents([
      ...students,
      newStudent
    ]);

    setForm({
      name: "",
      email: ""
    });

  };

  // Delete student
  const handleDelete = (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to remove this student?"
    );

    if (!confirmed) return;

    setStudents(
      students.filter(student => student.id !== id)
    );

  };

  // FILTER
  const filteredStudents = students.filter((student) => {

    const searchText = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText) ||
      student.username.toLowerCase().includes(searchText)
    );

  });

  return (

    <section className="students-page">

      <div className="page-heading">

        <div>
          <span className="badge">
            STUDENT DIRECTORY
          </span>

          <h1>Students</h1>

          <p>
            Manage and explore all registered students.
          </p>
        </div>

        <div className="student-count">
          <strong>{students.length}</strong>
          <span>Total Students</span>
        </div>

      </div>


      {/* ADD STUDENT FORM */}

      <div className="add-student">

        <div>
          <h2>Add Student</h2>
          <p>Add a new student to the local list.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Student name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Student email"
            value={form.email}
            onChange={handleChange}
          />

          <button type="submit">
            + Add Student
          </button>

        </form>

      </div>


      {/* SEARCH */}

      <div className="toolbar">

        <div className="search-box">

          <span>🔎</span>

          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={handleSearch}
          />

        </div>

        <span className="result-count">
          {filteredStudents.length} result(s)
        </span>

      </div>


      {/* LOADING */}

      {loading && (
        <div className="status">
          Loading students...
        </div>
      )}


      {/* ERROR */}

      {error && (
        <div className="error">
          {error}
        </div>
      )}


      {/* STUDENT LIST */}

      {!loading && !error && (

        <div className="student-grid">

          {filteredStudents.map((student) => (

            <StudentCard
              key={student.id}
              student={student}
              onDelete={handleDelete}
            />

          ))}

        </div>

      )}


      {/* NO RESULTS */}

      {!loading &&
        !error &&
        filteredStudents.length === 0 && (

          <div className="empty">

            <div>🔍</div>

            <h2>No students found</h2>

            <p>
              Try searching with a different name or email.
            </p>

          </div>

        )}

    </section>

  );
}

export default Students;