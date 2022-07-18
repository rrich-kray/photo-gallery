import './App.css';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import jwt_decode from 'jwt-decode';
import Dashboard from './pages/Dashboard/Dashboard';
import { useAuth } from './contexts/AuthContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

function App() {
  const { user } = useAuth();
  const token = localStorage.getItem('token');
  return (
    <div className="app flex-row justify-center align-center">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={!token ? <Landing /> : <Navigate to="dashboard" />}
          />
          <Route
            exact
            path="/login"
            element={!token ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route
            exact
            path="/register"
            element={!token ? <Register /> : <Navigate to="/dashboard" />}
          />
          <Route
            exact
            path="/dashboard"
            element={token ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
