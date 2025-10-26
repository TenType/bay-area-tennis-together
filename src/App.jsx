import { useEffect, useState } from "react";
import "./App.css";
import EventCalendar from "./EventCalendar";
import "./index.css";

// import backgroundVideo from "./assets/background.mp4";
import logo from "./assets/batt.png";

import coachcyrus from "./assets/gallery/cyrus.png";
import coachdaniel from "./assets/gallery/daniel.webp";
import coachdarry from "./assets/gallery/darry.webp";
import coachmax from "./assets/gallery/max.png";
import coachmatthew from "./assets/gallery/matthewli1.jpeg";
import coachrachel from "./assets/gallery/rachel.jpg";
import coachfiona from "./assets/gallery/FionaZhou.jpg";
import coachkatty from "./assets/gallery/KattyZhou.jpg";

import groupphoto from "./assets/gallery/groupphoto.webp";
import groupphoto2 from "./assets/gallery/groupphoto2.jpg";
import grouppractice from "./assets/gallery/grouppractice.jpg";
import coachjayden from "./assets/gallery/jayden.png";
import practice from "./assets/gallery/practice.webp";
import stretching from "./assets/gallery/stretching.jpg";
import stretching2 from "./assets/gallery/stretching2.jpg";
import MuyaoElvin from "./assets/gallery/20240216_Muyao_Elvin.jpg";
import CyrusEden from "./assets/gallery/20241011_Cyrus_Eden.jpg";
import JadelynClaire from "./assets/gallery/20250202_Jadelyn_Claire.jpg";
import JadelynClaireLucas from "./assets/gallery/20250223_Jadelyn_Claire&Lucas.jpg";
import RachelEllie from "./assets/gallery/20250701_Rachel_Ellie.jpg";
import CyrusKatieAlyssa from "./assets/gallery/20250828_Cyrus_Katie_Alyssa.jpg";
import AnwenEden from "./assets/gallery/20250829-Anwen-Eden.jpg";

function App() {
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const header = document.querySelector(".header");
    const hero = document.querySelector(".hero");
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

  const handleSubmit = async (event) => {
    // Prevent the browser's default form navigation so we can submit via fetch
    event.preventDefault();

    const formData = new FormData(event.target);

    // The form uses Google's entry.<id> names, so read those exact keys.
    const firstName = formData.get("entry.1878656242") || "";
    const lastName = formData.get("entry.1696058884") || "";
    const email = formData.get("entry.431504041") || "";
    const phone = formData.get("entry.42028302") || "";
    const enquiry = formData.get("entry.1237852117") || "";
    const message = formData.get("entry.1646022538") || "";

    // URL-encode values for safety
    const q = (v) => encodeURIComponent(v);

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSeoxy45AN7wmBE9gd4ZchDd87SeIfh22NXajUqfZ80bVdBkUA/formResponse?usp=pp_url&entry.1878656242=${q(firstName)}&entry.1696058884=${q(lastName)}&entry.431504041=${q(email)}&entry.42028302=${q(phone)}&entry.1237852117=${q(enquiry)}&entry.1646022538=${q(message)}`;

    try {
      // note: Google Forms often rejects cross-origin JS requests; no-cors makes the response opaque.
      await fetch(url, { mode: "no-cors" });
      setFormStatus("Your response has been recorded.");
    } catch (error) {
      setFormStatus("There was an error submitting your response.");
    }
  };

  return (
  <div id="app">
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-img" />
            <h1 className="logo">Bay Area Tennis Together</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#events">Events</a>
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
          <img
            src={grouppractice}
            alt="Bay Area Tennis Together"
            className="home-background"
          />
          <div className="hero-content">
            <h2 className="hero-title">
              Building Community, One Rally at a Time
            </h2>
            <p className="hero-subtitle">
              Join the most dedicated tennis coaching organization in the Bay
              Area!
            </p>
            <a href="#about" className="btn">
              Learn More
            </a>
          </div>
        </section>
        <section id="about" className="section container">
          <h2 className="section-title">About Us</h2>
          <p className="about">
            Welcome to Bay Area Tennis Together, your go-to community for all
            things tennis. Whether you are a beginner or a seasoned player, we
            have something for everyone. Our community is built on the
            principles of sportsmanship, inclusivity, and a shared passion for
            tennis. <br />
            <br />
            Since 2021, we have served over 100 students and raised over $3000
            for food banks, clothing drives, environmental conservation
            programs, and support for families with terminally-ill children and
            in marginalized communities. Our volunteers' efforts have been
            recognized with{" "}
            <a
              href="https://presidentialserviceawards.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              President's Volunteer Service Awards
            </a>{" "}
            for over 1000 combined service hours and outstanding contributions
            in community service in the Bay Area community.
            <br />
            <br />
            Bay Area Tennis Together is committed to uplifting students from all
            backgrounds, no matter the cost. If purchasing tennis rackets or
            gear is a financial burden to your family, please request to borrow
            spare tennis equipment or obtain a fee waiver when signing up for an
            event. We are more than happy to accommodate students who require
            financial assistance.
            <br />
            <br />
            Officially under{" "}
            <a
              href="https://www.ltnfamily.org/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Love Thy Neighbor
            </a>
            , a certified 501(c)(3) nonprofit organization.
          </p>
        </section>
        <section id="team" className="section container">
          <h2 className="section-title">Meet the Team</h2>
          <div className="coaches-grid">
            <div className="coach">
              <img src={coachmax} alt="Max Wen" />
              <h3>Max Wen</h3>
              <p className="coach-title">President</p>
              <p>
                Max Wen co-founded Bay Area Tennis Together in 2021 and leads
                the team as a tennis instructor with over a decade of
                experience. He has played competitively at various levels and
                believes in a holistic approach to tennis, focusing on both the
                mental and physical aspects of the game. When he is not teaching
                students, Max enjoys using his passion for computer science to
                create tailored lesson plans and expand community outreach
                programs through software and collaboration. His mission is to
                ensure that every student, regardless of income or physical
                ability, can learn and enjoy tennis.{" "}
              </p>
            </div>
            <div className="coach">
              <img src={coachjayden} alt="Jayden Szeto" />
              <h3>Jayden Szeto</h3>
              <p className="coach-title">Co-President</p>
              <p>
                Jayden Szeto has been playing tennis for most of his life,
                transitioning from player to coach. He started playing tennis at
                a young age and quickly fell in love with the sport. Jayden is
                known for his dynamic coaching style, which emphasizes agility,
                technique, and strategy. He has a knack for identifying and
                nurturing talent, making him a favorite among young athletes.
              </p>
            </div>
            <div className="coach">
              <img src={coachdarry} alt="Darry Wu" />
              <h3>Darry Wu</h3>
              <p className="coach-title">Co-President</p>
              <p>
                Darry Wu is a seasoned tennis coach with a background in biology
                and anatomy. His deep understanding of biomechanics allows him
                to help players optimize their performance and prevent injuries,
                especially for younger players who haven't been educated on the
                benefits of stretching! He is committed to fostering a positive
                and motivating environment for all his students.
              </p>
            </div>
            <div className="coach">
              <img src={coachdaniel} alt="Daniel Guo" />
              <h3>Daniel Guo</h3>
              <p className="coach-title">Instructor</p>
              <p>
                Daniel has been passionate about tennis since he was young, and
                he's thrilled to be teaching kids how to play the game. He
                believes that teaching is one of the most rewarding pursuits,
                and it’s something he truly enjoys. Watching students improve
                with each lesson is incredibly fulfilling for Daniel, and he’s
                grateful for the opportunity to help more people experience
                tennis, especially since it’s often seen as a sport with a high
                barrier to entry.
              </p>
            </div>
            <div className="coach">
              <img src={coachcyrus} alt="Cyrus Ma" />
              <h3>Cyrus Ma</h3>
              <p className="coach-title">Assistant Instructor</p>
              <p>
                {" "}
                Cyrus Ma is a dedicated tennis coach with a passion for teaching
                kids. He has played tennis competitively for around three years
                and brings both experience and enthusiasm to his coaching. While
                he finds tennis a fun sport, he understands that it also poses
                physical and mental challenges. With a friendly and patient
                approach, Cyrus fosters a positive and encouraging learning
                environment where young players can grow and refine their
                skills. He is committed to helping his students reach their full
                potential and achieve their tennis goals. 
              </p>
            </div>
            <div className="coach">
              <img
                src={logo}
                style={{ backgroundColor: "black" }}
                alt="Jason Lai"
              />
              <h3>Jason Lai</h3>
              <p className="coach-title">Assistant Instructor</p>
              <p>
                {" "}
                Jason Lai is an accomplished tennis coach who has worked with
                players of all levels, from beginners to professionals. With a
                focus on tactical training and match play, Jason helps his
                students develop the skills needed to excel in competitive
                tennis. He is known for his very dynamic coaching style and his
                ability to push players to reach their full potential. Jason’s
                coaching philosophy revolves around hard work, discipline, and
                having fun on the court.
              </p>
            </div>
          <div className="coach">
              <img src={coachmatthew} alt="Matthew Li" />
              <h3>Matthew Li</h3>
              <p className="coach-title">Instructor</p>
              <p>
                {" "}
                Matthew is an experienced tennis coach who works with kids across 
                a range of age groups. Having played tennis for over a decade—and 
                competing for seven years—he currently serves as the captain of 
                the Mission San Jose Varsity team. His coaching style emphasizes 
                consistency and match play, helping young athletes not only build 
                skills but also develop a genuine passion for the game. Outside 
                the court, Matthew pursues his interest in biology through research 
                focused on diabetes and cancer.
              </p>
            </div>
          <div className="coach">
              <img src={coachrachel} alt="Rachel Nguyen" />
              <h3>Rachel Nguyen</h3>
              <p className="coach-title">Instructor</p>
              <p>
                {" "}
                Rachel is a passionate tennis player and dedicated volunteer coach, 
                currently playing for her high school varsity team. Beyond tennis, 
                she has a love for reading and video editing, and she enjoys helping 
                young kids. Her journey began with teaching English to children, 
                and now, she’s sharing her love for tennis with them. With valuable 
                coaching experience, Rachel is committed to helping kids develop 
                both their skills and their confidence on the court.
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
            <img src={MuyaoElvin} alt="Tennis Image 6" />
            <img src={CyrusEden} alt="Tennis Image 7" />
            <img src={JadelynClaire} alt="Tennis Image 8" />
            <img src={JadelynClaireLucas} alt="Tennis Image 9" />
            <img src={RachelEllie} alt="Tennis Image 10" />
            <img src={CyrusKatieAlyssa} alt="Tennis Image 11" />
            <img src={AnwenEden} alt="Tennis Image 12" />
          </div>
        </section>

        <section id="events" className="section container">
          <h2 className="section-title">Events</h2>
          <EventCalendar />
        </section>

        <section id="faq" className="section container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What is Bay Area Tennis Together?</h3>
            <p>
              Bay Area Tennis Together is a community organization dedicated to
              bringing tennis enthusiasts of all levels together. We provide
              opportunities for players to improve their skills, participate in
              events, and connect with others who share a passion for tennis.
            </p>
          </div>
          <div className="faq-item">
            <h3>When are sessions held?</h3>
            <p>
              Primarily on the second Saturday of each month from 2:00 - 3:30pm,
              but sometimes circumstances arise that require us to change the
              date. We will update you through email, WeChat, and the shared
              calendar if something comes up.{" "}
            </p>
          </div>
          <div className="faq-item">
            <h3>Who can join the club?</h3>
            <p>
              Our club is open to tennis players of all ages and skill levels.
              Whether you're a beginner or an advanced player, we have something
              for you.
            </p>
          </div>
          <div className="faq-item">
            <h3>How do I sign up for events?</h3>
            <p>
              Please contact us through email or WeChat if you are interested in
              reserving a spot at our next community event. For private tutoring
              lessons, please reach out to your designated tutor for more
              information.
            </p>
          </div>
          <div className="faq-item">
            <h3>Where are the events held?</h3>
            <p>
              Our events are held all across the Bay Area, including the
              Fremont, Newark, and Union City Tri-City area.
            </p>
          </div>
          <div className="faq-item">
            <h3>How can I get involved as a volunteer?</h3>
            <p>
              We are glad you want to help our events! If you are interested in
              volunteering, please contact us in-person at the next community
              event, send an email to our team, or message us on WeChat. If
              eligible, you may also be able to earn service hours and the{" "}
              <a
                href="https://presidentialserviceawards.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                President's Volunteer Service Awards
              </a>{" "}
              by volunteering as part of the team.
            </p>
          </div>
        </section>
        <section id="contact" className="section container">
          <h2 className="section-title">Contact Us</h2>
          <form
            onSubmit={handleSubmit}
            action="https://docs.google.com/forms/d/e/1FAIpQLSeoxy45AN7wmBE9gd4ZchDd87SeIfh22NXajUqfZ80bVdBkUA/formResponse"
            method="POST"
            target="_self"
            className="contact-form"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="entry.1878656242"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="entry.1696058884"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="entry.431504041"
                  required
                />
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
              <textarea
                id="message"
                name="entry.1646022538"
                required
              ></textarea>
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
