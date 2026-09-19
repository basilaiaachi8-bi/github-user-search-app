import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserProfile from "./pages/UserProfile";

function App() {
  const [theme, setTheme] = useState("dark");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleSearch = (username) => {
    if (username.trim()) {
      navigate(`/user/${username}`);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "730px",
        padding: "2rem 1.5rem",
        margin: "0 auto",
      }}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SearchBar onSearch={handleSearch} error={error} />

      <Routes>
        <Route path="/" element={<Navigate to="/user/octocat" replace />} />
        <Route
          path="/user/:username"
          element={<UserProfile setError={setError} />}
        />
      </Routes>
    </div>
  );
}

export default App;
