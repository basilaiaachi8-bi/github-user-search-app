import "./UserCard.css";

function UserCard({ user }) {
  const formatDate = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `Joined ${day} ${month} ${year}`;
  };

  return (
    <div className="user-card">
      <img
        src={user.avatar_url}
        alt={user.name || user.login}
        className="avatar"
      />

      <div className="user-content">
        <div className="user-header">
          <div>
            <h2 className="user-name">{user.name || user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="user-handle"
            >
              @{user.login}
            </a>
          </div>
          <span className="joined-date">{formatDate(user.created_at)}</span>
        </div>

        <p className={`user-bio ${!user.bio ? "no-bio" : ""}`}>
          {user.bio || "This profile has no bio"}
        </p>

        <div className="stats-container">
          <div className="stat-box">
            <span>Repos</span>
            <strong>{user.public_repos}</strong>
          </div>
          <div className="stat-box">
            <span>Followers</span>
            <strong>{user.followers}</strong>
          </div>
          <div className="stat-box">
            <span>Following</span>
            <strong>{user.following}</strong>
          </div>
        </div>

        <div className="links-grid">
          <div className={`link-item ${!user.location ? "disabled" : ""}`}>
            <span>📍 {user.location || "Not Available"}</span>
          </div>
          <div className={`link-item ${!user.blog ? "disabled" : ""}`}>
            🔗{" "}
            {user.blog ? (
              <a
                href={
                  user.blog.startsWith("http")
                    ? user.blog
                    : `https://${user.blog}`
                }
                target="_blank"
                rel="noreferrer"
              >
                {user.blog}
              </a>
            ) : (
              "Not Available"
            )}
          </div>
          <div
            className={`link-item ${!user.twitter_username ? "disabled" : ""}`}
          >
            <span>
              🐦{" "}
              {user.twitter_username
                ? `@${user.twitter_username}`
                : "Not Available"}
            </span>
          </div>
          <div className={`link-item ${!user.company ? "disabled" : ""}`}>
            <span>🏢 {user.company || "Not Available"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
