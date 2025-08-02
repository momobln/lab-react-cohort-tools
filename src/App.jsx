import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import StudentDetailsPage from './pages/StudentDetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import Navbar from './components/Navbar'; // إذا كان موجودًا

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
