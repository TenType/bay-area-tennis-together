import React, { useEffect } from 'react';
import EventCalendar from './EventCalendar';
import './index.css';
import './App.css';

function App() {
  useEffect(() => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');

    const observer = new IntersectionObserver(
      ([e]) => {
        header.classList.toggle('scrolled', e.intersectionRatio < 1);
      },
      { threshold: [1] }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="root">
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img src="src/assets/batt.png" alt="Logo" className="logo-img" />
            <h1 className="logo">Bay Area Tennis Together</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="hero" className="hero">
          <video autoPlay loop muted className="background-video">
            <source src="src/assets/IMG_4691.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-content">
            <h2 className="hero-title">Dedication, Sweat, Success</h2>
            <p className="hero-subtitle">Join the most dedicated tennis community in the Bay Area!</p>
            <a href="#about" className="btn">Learn More</a>
          </div>
        </section>
        <section id="about" className="section container">
          <h2 className="section-title">About Us</h2>
          <p>Welcome to Bay Area Tennis Together, your go-to community for all things tennis in the Bay Area. Whether you're a beginner or a seasoned player, we have something for everyone.</p>
        </section>
        <section id="events" className="section container">
          <h2 className="section-title">Events</h2>
          <EventCalendar />
        </section>
        <section id="gallery" className="section container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            <img src="src/assets/stretching.jpg" alt="Tennis Image 1" />
            <img src="src/assets/stretching2.jpg" alt="Tennis Image 2" />
            <img src="src/assets/tenniskids.jpg" alt="Tennis Image 3" />
            <img src="src/assets/jaydenteaching.webp" alt="Tennis Image 4" />
            <img src="src/assets/groupphotoblurry.webp" alt="Tennis Image 5" />
          </div>
        </section>
        <section id="contact" className="section container">
          <h2 className="section-title">Contact Us</h2>
          <form action="#" method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" className="btn">Send</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Bay Area Tennis Together. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
