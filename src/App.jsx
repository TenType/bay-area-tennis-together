import { useEffect } from "react";
import EventCalendar from "./EventCalendar";
import "./index.css";
import "./App.css";

import logo from "./assets/batt.png";
import backgroundVideo from "./assets/background.mp4";

import stretching from "./assets/gallery/stretching.jpg";
import stretching2 from "./assets/gallery/stretching2.jpg";
import groupphoto from "./assets/gallery/groupphoto.webp";
import groupphoto2 from "./assets/gallery/groupphoto2.jpg";
import practice from "./assets/gallery/practice.webp";

function App() {
  useEffect(() => {
    const header = document.querySelector(".header");
    const logoContainer = document.querySelector(".logo-container");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.5) {
          header.classList.add("scrolled");
          logoContainer.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
          logoContainer.classList.remove("scrolled");
        }
      },
      { threshold: [0.5] }
    );

    observer.observe(document.querySelector("#hero"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="root">
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-img" />
            <h1 className="logo">Bay Area Tennis Together</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#coaches">Our Coaches</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="hero" className="hero">
          <video autoPlay loop muted className="background-video">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-content">
            <h2 className="hero-title">Dedication, Sweat, Success</h2>
            <p className="hero-subtitle">
              Join the most dedicated tennis community in the Bay Area!
            </p>
            <a href="#about" className="btn">
              Learn More
            </a>
          </div>
        </section>
        <section id="about" className="section container">
          <h2 className="section-title">About Us</h2>
          <p>
            Welcome to Bay Area Tennis Together, your go-to community for all
            things tennis in the Bay Area. Whether you are a beginner or a
            seasoned player, we have something for everyone. <br />
            At Bay Area Tennis Together, our mission is to bring tennis
            enthusiasts of all levels together. Our community is built on the
            principles of sportsmanship, camaraderie, and a shared passion for
            tennis. <br />
            Join us and become part of a supportive and dynamic tennis community
            where dedication, sweat, and success are celebrated every day.{" "}
            <br />
            <br />
            Officially under our parent organization{" "}
            <a
              href="https://www.ltnfamily.org/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Love Thy Neighbor
            </a>
            .<br />
            Ran primarily by high school volunteers, on the second Saturday of
            each month (but check the calendar to be certain!)
          </p>
        </section>
        <section id="events" className="section container">
          <h2 className="section-title">Events</h2>
          <EventCalendar />
        </section>
        <section id="coaches" className="section container">
  <h2 className="section-title">Our Coaches</h2>
  <div className="coaches-grid">
    <div className="coach">
      <img src="src/assets/coach1.jpg" alt="Max Wen" />
      <h3>Max Wen</h3>
      <p>Coach 1's bio goes here. This coach specializes in beginners and has a passion for teaching the fundamentals of tennis.</p>
    </div>
    <div className="coach">
      <img src="src/assets/coach2.jpg" alt="Jayden Szeto" />
      <h3>Jayden Szeto</h3>
      <p>Coach 2's bio goes here. This coach has years of experience and has trained several advanced players.</p>
    </div>
    <div className="coach">
      <img src="src/assets/coach3.jpg" alt="Darryl Wu" />
      <h3>Darryl Wu</h3>
      <p>Coach 2's bio goes here. This coach has years of experience and has trained several advanced players.</p>
    </div>
    <div className="coach">
      <img src="src/assets/coach4.jpg" alt="Jayden Szeto" />
      <h3>Coach Name 2</h3>
      <p>Coach 2's bio goes here. This coach has years of experience and has trained several advanced players.</p>
    </div>
    <div className="coach">
      <img src="src/assets/coach2.jpg" alt="Jayden Szeto" />
      <h3>Coach Name 2</h3>
      <p>Coach 2's bio goes here. This coach has years of experience and has trained several advanced players.</p>
    </div>
  </div>
</section>
        <section id="gallery" className="section container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            <img src={stretching} alt="Tennis Image 1" />
            <img src={stretching2} alt="Tennis Image 2" />
            <img src={groupphoto} alt="Tennis Image 3" />
            <img src={groupphoto2} alt="Tennis Image 4" />
            <img src={practice} alt="Tennis Image 5" />
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
            <button type="submit" className="btn">
              Submit
            </button>
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
