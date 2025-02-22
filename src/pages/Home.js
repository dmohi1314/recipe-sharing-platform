import React from "react";
import "./Home.css"; // Import the external CSS

const Home = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">RecipeHub</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Signup</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <h1>Welcome to RecipeHub</h1>
        <p>
          Discover and share amazing recipes from around the world. 
          Explore, cook, and enjoy delicious homemade meals!
        </p>

        <div className="features">
          <div className="feature-card">
            <span className="icon">🍽️</span>
            <h3>Explore Recipes</h3>
            <p>Find mouthwatering recipes shared by food lovers like you.</p>
          </div>
          <div className="feature-card">
            <span className="icon">✍️</span>
            <h3>Share Your Own</h3>
            <p>Upload your favorite recipes and let others try them out!</p>
          </div>
          <div className="feature-card">
            <span className="icon">⭐</span>
            <h3>Save & Rate</h3>
            <p>Bookmark your favorite recipes and rate them for others.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
