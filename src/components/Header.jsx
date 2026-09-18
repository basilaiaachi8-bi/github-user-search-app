import "./Header.css";

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1 className="logo">devfinder</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
        {theme === "dark" ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#fff">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.243 2.05a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 14.243a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM11 16a1 1 0 11-2 0v1a1 1 0 112 0v-1zm-6.364-1.757a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM4 11a1 1 0 110-2H3a1 1 0 110 2h1zm1.657-6.95a1 1 0 010 1.414l-.707.707A1 1 0 013.536 4.757l.707-.707a1 1 0 011.414 0zM10 6a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#4B6A9B">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>
    </header>
  );
}

export default Header;
