import { Link, useLocation } from "react-router";

export const Navbar = ({ theme, onToggleTheme }) => {
    const location = useLocation();
    return( 
    <nav className="navbar">
        <div className="navbar-brand">
            <Link className="brand-link" to="/">
                🎵 Music Player
            </Link>
        </div>

        <div className="navbar-links">
            <Link 
             to="/" 
             className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                All Songs
            </Link>

            <Link 
             to="/playlist" 
             className={`nav-link ${location.pathname === "/playlist" ? "active" : ""}`}>
                Playlists
            </Link>

            <button
                className="theme-toggle-btn"
                onClick={onToggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
                <span className="theme-toggle-icon" aria-hidden="true">
                    {theme === "dark" ? "☀" : "☾"}
                </span>
            </button>
        </div>
    </nav>
    );
};