import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Admin, Analytics, Dashboard, Home, Landing } from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const login = () =>
    setUser({
      id: 1,
      name: "John",
      permissions: ["analize"],
      roles: ["admin"],
    });

  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <div className="main-container fade-in">
        <Navigation />

        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}

        <Routes>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route
            path="/analytics"
            element={
              <ProtectedRoute
                redirectTo="/home"
                isAllowed={!!user && user.permissions.includes("analize")}
              >
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute
                redirectTo="/home"
                isAllowed={!!user && user.roles.includes("admin")}
              >
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/landing">INICIO</Link>
        </li>
        {/* <li>
          <Link to="/home">Home</Link>
        </li> */}
        <li>
          <Link to="/dashboard">DASHBOARD</Link>
        </li>
        <li>
          <Link to="/analytics">ANALYTICS</Link>
        </li>
        <li>
          <Link to="/admin">ADMIN</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
