import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;