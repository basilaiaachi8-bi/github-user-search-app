import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const fetchGitHubUser = async (username) => {
    try {
      setError(false);
      const res = await fetch(`https://api.github.com/users/${username}`);

      if (!res.ok) {
        setError(true);
        return;
      }

      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchGitHubUser("octocat");
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "730px", padding: "0 1.5rem" }}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SearchBar onSearch={fetchGitHubUser} error={error} />
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
