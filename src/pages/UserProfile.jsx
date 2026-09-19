import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserCard from "../components/UserCard";

function UserProfile({ setError }) {
  const params = useParams();

  const username = params.username || "octocat";

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
          setError(true);
          setUser(null);
          return;
        }
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username, setError]);

  if (loading)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          color: "var(--text-secondary)",
        }}
      >
        Loading...
      </p>
    );

  return user ? <UserCard user={user} /> : null;
}

export default UserProfile;
