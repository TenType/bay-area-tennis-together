import React, { useEffect } from 'react';
import EventCalendar from './EventCalendar';
import './index.css';
import './App.css';

function App() {
  useEffect(() => {
    const header = document.querySelector('.header');
    const logoContainer = document.querySelector('.logo-container');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.5) {
          header.classList.add('scrolled');
          logoContainer.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
          logoContainer.classList.remove('scrolled');
        }
      },
      { threshold: [0.5] }
    );

    observer.observe(document.querySelector('#hero'));

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
          <p>
          Welcome to Bay Area Tennis Together, your go-to community for all things tennis in the Bay Area. 
          Whether you're a beginner or a seasoned player, we have something for everyone. <br />
          At Bay Area Tennis Together, our mission is to bring tennis enthusiasts of all levels together. 
          Whether you're a beginner just starting out or a seasoned player looking to hone your skills,
          we have something for everyone. Our community is built on the principles of sportsmanship, camaraderie, and a shared passion for tennis. 
          Join us and become part of a supportive and dynamic tennis community where dedication, sweat, and success are celebrated every day. <br /><br />
          Officially under our parent organization <a href="https://www.ltnfamily.org/clubs/tennis-club">Love Thy Neighbor</a>.
          </p>
        </section>
        <section id="events" className="section container">
          <h2 className="section-title">Events</h2>
          <EventCalendar />
        </section>
        <section id="gallery" className="section container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            <img src="src/assets/gallery/stretching.jpg" alt="Tennis Image 1" />
            <img src="src/assets/gallery/stretching2.jpg" alt="Tennis Image 2" />
            <img src="src/assets/gallery/tenniskids.jpg" alt="Tennis Image 3" />
            <img src="src/assets/gallery/jaydenteaching.webp" alt="Tennis Image 4" />
            <img src="src/assets/gallery/groupphotoblurry.webp" alt="Tennis Image 5" />
          </div>
        </section>
        <section id="contact" className="section container">
          <h2 className="section-title">Contact Us</h2>
          <form action="#" method="POST" className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="enquiry">Reason of Enquiry</label>
              <select id="enquiry" name="enquiry">
                <option value="">--Select--</option>
                <option value="general">General</option>
                <option value="membership">Membership</option>
                <option value="events">Events</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Comments</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
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
