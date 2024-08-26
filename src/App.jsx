import { useState, useEffect } from "react";
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
import coach2 from "./assets/gallery/jayden.webp"
import coach1 from "./assets/gallery/coach1.webp"

function App() {
  const [formStatus, setFormStatus] = useState(""); 

  useEffect(() => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const enquiry = formData.get("enquiry");
    const message = formData.get("message");

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSeoxy45AN7wmBE9gd4ZchDd87SeIfh22NXajUqfZ80bVdBkUA/formResponse?usp=pp_url&entry.1878656242=${firstName}&entry.1696058884=${lastName}&entry.431504041=${email}&entry.42028302=${phone}&entry.1237852117=${enquiry}&entry.1646022538=${message}`;

    try {
      await fetch(url, { mode: 'no-cors' });
      setFormStatus("Your response has been recorded."); 
    } catch (error) {
      setFormStatus("There was an error submitting your response."); 
    }
  };

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
                <a href="#faq">FAQ</a>
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
      <img src={coach2}  alt="Max Wen" />
      <h3>Max Wen</h3>
      <p className="coach-title">Coach</p>
      <p>Max Wen is a passionate tennis coach with over a decade of experience. He has played competitively at various levels and is dedicated to helping players of all ages 
        improve their skills. Max believes in a holistic approach to tennis, focusing on both the mental and physical aspects of the game. His students appreciate his patience, 
        expertise, and ability to tailor lessons to individual needs. </p>
    </div>
    <div className="coach">
      <img src={coach2} alt="Jayden Szeto" />
      <h3>Jayden Szeto</h3>
      <p className="coach-title">Coach</p>
      <p>Jayden Szeto has been playing tennis for most of his life, transitioning from player to coach. He started playing tennis at a young age and quickly fell in love with the sport.
         Jayden is known for his dynamic coaching style, which emphasizes agility, technique, and strategy. 
         He has a knack for identifying and nurturing talent, making him a favorite among young athletes.</p>
    </div>
    <div className="coach">
      <img src={coach2} alt="Darryl Wu" />
      <h3>Darryl Wu</h3>
      <p className="coach-title">Coach</p>
      <p>Darryl Wu is a seasoned tennis coach with a background in biology and anatomy. His deep understanding of biomechanics allows him to help players optimize their performance and prevent injuries. 
        He is committed to fostering a positive and motivating environment for all his students.</p>
    </div>
    <div className="coach">
      <img src={coach1}  alt="Daniel Guo" />
      <h3>Daniel Guo</h3>
      <p className="coach-title">Coach</p>
      <p>Daniel has been passionate about tennis since he was young, and he's thrilled to be teaching kids how to play the game. 
        He believes that teaching is one of the most rewarding pursuits, and it’s something he truly enjoys. Watching students improve 
        with each lesson is incredibly fulfilling for Daniel, and he’s grateful for the opportunity to help more people experience tennis, 
        especially since it’s often seen as a sport with a high barrier to entry.  
      </p>
    </div>
    <div className="coach">
      <img src={coach2}  alt="Jason Lai" />
      <h3>Jason Lai</h3>
      <p className="coach-title">Coach</p>
      <p> Jason Lai is an accomplished tennis coach who has worked with players of all levels, from beginners to professionals. 
        With a focus on tactical training and match play, Jason helps his students develop the skills needed to excel in competitive tennis. 
        He is known for his very dynamic coaching style and his ability to push players to reach their full potential. 
        Jason’s coaching philosophy revolves around hard work, discipline, and having fun on the court.</p>
    </div>
    <div className="coach">
      <img src={coach2}  alt="LinLin" />
      <h3>LinLin</h3>
      <p className="coach-title">Organizer</p>
      <p>LinLin is the driving force behind Bay Area Tennis Together, expertly managing communication, logistics, and event coordination. 
        As Max's mother and the primary organizer, she ensures the smooth operation of the club with her exceptional organizational skills. 
        Beyond her administrative duties, LinLin is deeply committed to the success of our programs and the well-being of our members. Her warm, approachable nature
         makes her a trusted figure in the community, allowing our coaches and players to focus on their love for tennis while she handles all the essential details.
      </p>
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

        <section id="faq" className="section container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What is Bay Area Tennis Together?</h3>
            <p>Bay Area Tennis Together is a community organization dedicated to bringing tennis enthusiasts of all levels together. We provide opportunities for players to improve their skills, participate in events, and connect with others who share a passion for tennis.</p>
          </div>
          <div className="faq-item">
            <h3>When are sessions held?</h3>
            <p>Primarily on the second Saturday of each month from 2:30 - 4:00pm, but sometimes circumstances arise that require us to change the date. We will update you through WeChat and through the calendar if something comes up. </p>
          </div>
          <div className="faq-item">
            <h3>Who can join the club?</h3>
            <p>Our club is open to tennis players of all ages and skill levels. Whether you're a beginner or an advanced player, we have something for you.</p>
          </div>
          <div className="faq-item">
            <h3>How do I sign up for events?</h3>
            <p>Please contact us through WeChat if you are interested in joining the club. </p>
          </div>
          <div className="faq-item">
            <h3>Where are the events held?</h3>
            <p>Our events are primarily held in the Fremont, Newark, and Union City tri-city area. Specific locations will be listed on the event details in the calendar or in WeChat.</p>
          </div>
          <div className="faq-item">
            <h3>How can I get involved as a volunteer?</h3>
            <p>If you're interested in volunteering, please contact us directly through WeChat. We are always looking for enthusiastic individuals to help with our events and programs.</p>
          </div>
        </section>
        <section id="contact" className="section container">
  <h2 className="section-title">Contact Us</h2>
  <form 
  action="https://docs.google.com/forms/d/e/1FAIpQLSeoxy45AN7wmBE9gd4ZchDd87SeIfh22NXajUqfZ80bVdBkUA/formResponse" 
  method="POST" 
  target="_self"
  className="contact-form"
>
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" name="entry.1878656242" required />
    </div>
    <div className="form-group">
      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" name="entry.1696058884" required />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="entry.431504041" required />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" id="phone" name="entry.42028302" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="enquiry">Reason of Enquiry</label>
    <select id="enquiry" name="entry.1237852117">
      <option value="">--Select--</option>
      <option value="General">General</option>
      <option value="Membership">Membership</option>
      <option value="Events">Events</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="message">Comments</label>
    <textarea id="message" name="entry.1646022538" required></textarea>
  </div>
  <button type="submit" className="btn">
    Submit
  </button>
</form>
{formStatus && <p className="form-status">{formStatus}</p>}
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
