import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="landing-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Music Center</span>
          </h1>
          <p className="hero-subtitle">
            Your ultimate music management platform
          </p>
          <p className="hero-description">
            Organize your tracks, albums, and artists all in one place
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features-section">
        <div className="features-grid">

          {/* Tracks Card */}
          <Link to="/tracks" className="feature-card">
            <div className="card-icon">🎵</div>
            <h3 className="card-title">Tracks</h3>
            <p className="card-description">
              Browse and manage your music collection
            </p>
            <div className="card-footer">
              <span className="card-link">Explore Tracks →</span>
            </div>
          </Link>

          {/* Albums Card */}
          <Link to="/albums" className="feature-card">
            <div className="card-icon">💿</div>
            <h3 className="card-title">Albums</h3>
            <p className="card-description">
              Discover and organize your albums
            </p>
            <div className="card-footer">
              <span className="card-link">View Albums →</span>
            </div>
          </Link>

          {/* Artists Card */}
          <Link to="/artists" className="feature-card">
            <div className="card-icon">🎤</div>
            <h3 className="card-title">Artists</h3>
            <p className="card-description">
              Explore your favorite artists
            </p>
            <div className="card-footer">
              <span className="card-link">Browse Artists →</span>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}

export default HomePage;