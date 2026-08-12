import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { FaHeart, FaEnvelope, FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import TelephoneFrontView from "../../assets/Contact/Telephone_front_view.png";
import TelephoneBackView from "../../assets/Contact/Telephone_above_view.png";
import dialSound from "../../assets/Sounds/click.mp3";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    const LINKS = [
        { icon: "github", label: "GitHub", url: "https://github.com/FaiqaAamer" }, // 1st github
        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/faiqa-aamer-a84a083ab/" },   // 2nd linkedIn
        { icon: "heart", label: "Say hello", url: "https://yourportfolio.com" }, // 3rd heart
        { icon: "heart", label: "Say hello", url: "https://yourportfolio.com" }, // 4th heart
        { icon: "heart", label: "Say hello", url: "https://yourportfolio.com" }, // 5th heart
        { icon: "heart", label: "Say hello", url: "https://yourportfolio.com" }, // 6th heart
        { icon: "mail", label: "Email", url: "mailto:techwithfaiqa04@gmail.com" }, // 7th email
        { icon: "cv", label: "CV / Resume", url: "https://yourportfolio.com/resume.pdf" }, // 8th resume
        { icon: "heart", label: "Say hello", url: "https://yourportfolio.com" },  // 9th heart
        { icon: "heart", label: "Say hello", url: "https://yourportfolio.com" },  // 10th heart
        { icon: "sm", label: "Send Message", url: "#" }
    ];

    function playDialSound() {
      const audio = new Audio(dialSound);
      audio.play();
    }

    function createHeartRain() {
    const palette = ["#f1e9d8", "#b7976a", "#e2c085", "#c0b8a8"]; 
    
    for (let i = 0; i < 80; i++) {
        const heartContainer = document.createElement("div");
        heartContainer.className = "heart-rain";

        heartContainer.style.left = Math.random() * window.innerWidth + "px";

        heartContainer.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.style.animationDelay = Math.random() * 2 + "s";
        heartContainer.style.fontSize = Math.random() * 24 + 10 + "px";

        const color = palette[Math.floor(Math.random() * palette.length)];

        const root = createRoot(heartContainer);
        root.render(<FaHeart style={{ color }} />);

        document.body.appendChild(heartContainer);
        setTimeout(() => heartContainer.remove(), 7000);
    }
    }

    const HOLES = [
      [295,156.5], [324,151], [352.5,157.5], [376,174.5],
      [346,278.5], [315,282], [287,272.5], [266.5,253.5],
      [256.5,226.5], [272,172.5], [258.5,198.5]
    ];

    const HOLE_R = 15;
    const svgNS = "http://www.w3.org/2000/svg";
    const holeGroup = document.getElementById("holeGroup");
    const widget = document.getElementById("phoneWidget");
    const frontLayer = document.getElementById("frontLayer");
    const afterLayer = document.getElementById("afterLayer");

    function reveal() {
      widget.classList.add("revealed");
    }
    function conceal() {
      widget.classList.remove("revealed");
    }

    frontLayer.addEventListener("click", reveal);
    frontLayer.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        reveal();
      }
    });

    afterLayer.addEventListener("click", e => {
      if (!e.target.closest(".hole")) conceal();
    });

    function makeGlyph(g, entry, hx, hy) {
        const foreign = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreign.setAttribute("x", hx - 6);
        foreign.setAttribute("y", hy - 6);
        foreign.setAttribute("width", 12);
        foreign.setAttribute("height", 12);

        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.width = "12px";
        container.style.height = "12px";

        const iconMap = {
            heart: <FaHeart size={1} className="dial-icon"/>,
            mail: <FaEnvelope size={5} className="dial-icon"/>,
            cv: <FaFileAlt size={5} className="dial-icon"/>,
            linkedin: <FaLinkedin size={5} className="dial-icon"/>,
            github: <FaGithub size={5} className="dial-icon"/>,
            sm: <div className="dial-icon sm-icon">SM</div>
        };

        import("react-dom/client").then(ReactDOM => {
            const root = ReactDOM.createRoot(container);
            root.render(iconMap[entry.icon]);
        });

        foreign.appendChild(container);
        g.appendChild(foreign);
        }


    HOLES.forEach((pos, i) => {
      const entry = LINKS[i] || { icon: "heart", label: "Say hello", url: "#" };
      const [hx, hy] = pos;

      const g = document.createElementNS(svgNS, "g");
      g.setAttribute("class", "hole");
      g.setAttribute("tabindex", "0");
      g.setAttribute("role", "link");
      g.setAttribute("aria-label", entry.label);

      const hit = document.createElementNS(svgNS, "circle");
      hit.setAttribute("class", "hit");
      hit.setAttribute("cx", hx);
      hit.setAttribute("cy", hy);
      hit.setAttribute("r", HOLE_R);
      g.appendChild(hit);

      const ring = document.createElementNS(svgNS, "circle");
      ring.setAttribute("class", "ring");
      ring.setAttribute("cx", hx);
      ring.setAttribute("cy", hy);
      ring.setAttribute("r", HOLE_R - 2);
      g.appendChild(ring);

      makeGlyph(g, entry, hx, hy);

    function go() {
      playDialSound(); 
      setTimeout(() => {
        if (entry.icon === "heart") {
          createHeartRain();
          return; 
        }
        if (entry.url && entry.url !== "#") {
          window.open(entry.url, "_blank", "noopener");
        }
        if (entry.icon === "sm") {
          document.getElementById("contactForm").classList.add("show");
          return;
        }
      }, 600);
    }

      g.addEventListener("click", e => {
        e.stopPropagation();
        go();
      });
      g.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          go();
        }
      });

      holeGroup.appendChild(g);
    });
  }, []);

  return (
    <div className="phone-widget" id="phoneWidget">
      <div
        className="layer layer-front"
        id="frontLayer"
        role="button"
        tabIndex="0"
        aria-label="Show contact dial"
      >
        <img src={TelephoneFrontView} alt="Vintage black rotary telephone" />
      </div>

      <div className="layer layer-after" id="afterLayer">
        <div className="dial-scene">
          <img
            src={TelephoneBackView}
            alt="Rotary telephone dial with contact icons"
          />
          <svg
            id="dialSvg"
            viewBox="0 0 604 413"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="false"
          >
            <g id="holeGroup"></g>
          </svg>
        </div>
      </div>
      <div id="contactForm" className="contact-form hidden">
        <form
          action="mailto:techwithfaiqa04@gmail.com"
          method="post"
          encType="text/plain"
        >
          <h2>Send Message</h2>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message ✈️</button>
        </form>
        <button
          type="button"
          className="close-btn"
          onClick={() =>
            document.getElementById("contactForm").classList.remove("show")
          }
        >
          ✖ Close
        </button>
      </div>
    </div>
  );
}

export default Contact;
