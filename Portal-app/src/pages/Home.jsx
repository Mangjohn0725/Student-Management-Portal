import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      <div className="hero">

        <div className="hero-content">

          <span className="badge">
            STUDENT MANAGEMENT PORTAL
          </span>

          <h1>
            Manage your student
            <br />
            <span>smarter and faster.</span>
          </h1>

          <p>
            A modern student management portal built with React..
            Browse students, search records, and view detailed
            student information from one dashboard.
          </p>

          <div className="hero-buttons">

            <Link to="/students" className="primary-btn">
              View Students →
            </Link>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub Repository
            </a>

          </div>

        </div>

        <div className="hero-card">

          <div className="dashboard-card">

            <div className="dashboard-top">
              <span>Student Dashboard</span>
              <span className="online">● Online</span>
            </div>

            <div className="stat-preview">

              <div>
                <strong>10</strong>
                <small>Students</small>
              </div>

              <div>
                <strong>24</strong>
                <small>Courses</small>
              </div>

              <div>
                <strong>92%</strong>
                <small>Attendance</small>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="features">

        <div className="feature">
          <div>👨‍🎓</div>
          <h3>Student Records</h3>
          <p>
            Easily view student information and profiles.
          </p>
        </div>

        <div className="feature">
          <div>🔎</div>
          <h3>Smart Search</h3>
          <p>
            Search and filter student records instantly.
          </p>
        </div>

        <div className="feature">
          <div>⚡</div>
          <h3>React Powered</h3>
          <p>
            Fast and interactive React-based interface.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Home;