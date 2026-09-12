import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function StudentDetails() {

  const { id } = useParams();

  const [student, setStudent] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    const fetchStudent = async () => {

      try {

        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        setStudent(response.data);

      } catch (err) {

        setError("Student could not be found.");

      } finally {

        setLoading(false);

      }

    };

    fetchStudent();

  }, [id]);

  if (loading) {

    return (
      <div className="status">
        Loading student...
      </div>
    );

  }

  if (error) {

    return (
      <div className="error">
        {error}
      </div>
    );

  }

  return (

    <section className="details-page">

      <Link to="/students" className="back-btn">
        ← Back to Students
      </Link>

      <div className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            {student.name.charAt(0)}
          </div>

          <div>

            <span className="badge">
              STUDENT #{student.id}
            </span>

            <h1>{student.name}</h1>

            <p>
              @{student.username}
            </p>

          </div>

        </div>


        <div className="details-grid">

          <div className="detail-item">

            <span>EMAIL</span>

            <strong>
              {student.email}
            </strong>

          </div>

          <div className="detail-item">

            <span>PHONE</span>

            <strong>
              {student.phone}
            </strong>

          </div>

          <div className="detail-item">

            <span>WEBSITE</span>

            <strong>
              {student.website}
            </strong>

          </div>

          <div className="detail-item">

            <span>COMPANY</span>

            <strong>
              {student.company.name}
            </strong>

          </div>

        </div>


        <div className="address-section">

          <h2>Address</h2>

          <p>
            {student.address.street}, {student.address.suite}
          </p>

          <p>
            {student.address.city}, {student.address.zipcode}
          </p>

        </div>


        <div className="company-section">

          <h2>Company Information</h2>

          <p>
            <strong>{student.company.name}</strong>
          </p>

          <p>
            {student.company.catchPhrase}
          </p>

          <p>
            {student.company.bs}
          </p>

        </div>

      </div>

    </section>

  );
}

export default StudentDetails;