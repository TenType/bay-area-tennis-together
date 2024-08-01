import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Bay Area Tennis Together</h1>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="about" className="container">
          <h2>About Us</h2>
          <p>Welcome to Bay Area Tennis Together, your go-to community for all things tennis in the Bay Area. Whether you're a beginner or a seasoned player, we have something for everyone.</p>
        </section>
        <section id="gallery" className="container">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <img src="public/images/tennis1.jpg" alt="Tennis Image 1" />
            <img src="public/images/tennis2.jpg" alt="Tennis Image 2" />
            <img src="public/images/tennis3.jpg" alt="Tennis Image 3" />
          </div>
        </section>
        <section id="contact" className="container">
          <h2>Contact Us</h2>
          <form action="#" method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Bay Area Tennis Together. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
